use core::slice::SlicePattern;
use hudsucker::{
    async_trait::async_trait,
    certificate_authority::OpensslAuthority,
    hyper::{Body, Request, Response},
    openssl::{hash::MessageDigest, pkey::PKey, x509::X509},
    *,
};
use lazy_static::lazy_static;
use rcgen::{
    BasicConstraints, Certificate, CertificateParams, DistinguishedName, DnType, IsCa,
    KeyUsagePurpose,
};
use rustls_pemfile;
use std::net::SocketAddr;
use std::process::Command;
use std::sync::Mutex;
use std::{error::Error, path::PathBuf};
use std::{fs, io::Read};
use std::{fs::File, str::FromStr};
use tauri::{api::path::data_dir, http::Uri};
use winreg::enums::{HKEY_CURRENT_USER, KEY_ALL_ACCESS};

#[cfg(windows)]
use winreg::RegKey;

pub fn generate_ca() -> Result<(), Box<dyn Error>> {
    let mut params = CertificateParams::default();
    let mut distinguished_name = DistinguishedName::new();
    distinguished_name.push(DnType::CommonName, "grasscutter-tools");
    params.distinguished_name = distinguished_name;
    params.key_usages = vec![
        KeyUsagePurpose::DigitalSignature,
        KeyUsagePurpose::KeyCertSign,
        KeyUsagePurpose::CrlSign,
    ];
    params.is_ca = IsCa::Ca(BasicConstraints::Unconstrained);

    let cert = Certificate::from_params(params)?;
    let cert_crt = cert.serialize_pem()?;
    let private_key = cert.serialize_private_key_pem();
    let path_ca = get_ca_path()?;
    if !path_ca.exists() {
        fs::create_dir_all(&path_ca)?;
    }
    let path_crt = path_ca.join("cert.crt");
    fs::write(path_crt, cert_crt)?;
    let path_key = path_ca.join("private.key");
    fs::write(path_key, private_key)?;
    Ok(())
}

pub fn install_ca() -> Result<String, Box<dyn Error>> {
    let output = if cfg!(target_os = "windows") {
        let path_crt = get_ca_path_with("cert.crt")?.display().to_string();
        let cmd_str = "certutil -user -addstore Root ".to_string() + &path_crt;
        Command::new("cmd")
            .arg("/c")
            .arg(cmd_str)
            .output()
            .expect("cmd exec error!")
    } else {
        let cmd_str = format!("{} {}", "certutil -user -addstore Root", "");
        Command::new("cmd")
            .arg("/c")
            .arg(cmd_str)
            .output()
            .expect("cmd exec error!")
    };
    let output_str = String::from_utf8_lossy(&output.stdout);
    Ok(output_str.to_string())
}

lazy_static! {
    static ref SERVER: Mutex<String> = Mutex::new(String::from("https://1.12.240.115"));
}

pub fn set_proxy_addr(addr: String) {
    *SERVER.lock().unwrap() = addr
}

const KEY_PATH: &'static str = "Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings";

pub fn add_setting(port: u16) -> Result<(), Box<dyn Error>> {
    let hkcu = RegKey::predef(HKEY_CURRENT_USER);
    let key = hkcu.open_subkey_with_flags(KEY_PATH, KEY_ALL_ACCESS)?;
    key.set_value("ProxyEnable", &1u32)?;
    let server = format!("127.0.0.1:{}", port);
    key.set_value("ProxyServer", &server)?;
    Ok(())
}

#[derive(Clone)]
struct ProxyHandler;

#[async_trait]
impl HttpHandler for ProxyHandler {
    async fn handle_request(
        &mut self,
        _context: &HttpContext,
        mut request: Request<Body>,
    ) -> RequestOrResponse {
        let uri = request.uri().to_string();
        let array = vec!["hoyoverse.com", "mihoyo.com", "yuanshen.com"];
        if array.iter().any(|e| uri.contains(e)) {
            let path_and_query = request.uri().path_and_query();
            if let Some(path_and_query) = path_and_query {
                let new_uri =
                    Uri::from_str(format!("{}{}", SERVER.lock().unwrap(), path_and_query).as_str())
                        .unwrap();
                *request.uri_mut() = new_uri;
            }
        }
        RequestOrResponse::Request(request)
    }

    async fn handle_response(
        &mut self,
        _context: &HttpContext,
        response: Response<Body>,
    ) -> Response<Body> {
        response
    }
}

pub async fn start(port: u16) -> Result<(), Box<dyn Error>> {
    let path_key = get_ca_path_with("private.key")?;
    let mut file_key = File::open(&path_key)?;
    let mut private_key = Vec::new();
    file_key.read_to_end(&mut private_key)?;
    let private_key = PKey::private_key_from_pem(&mut private_key.as_slice())?;
    // let private_key = rustls::PrivateKey(
    //     rustls_pemfile::pkcs8_private_keys(&mut private_key.as_slice())?.remove(0),
    // );

    let path_crt = get_ca_path_with("cert.crt")?;
    let mut file_crt = File::open(&path_crt)?;
    let mut ca_cert = Vec::new();
    file_crt.read_to_end(&mut ca_cert)?;
    let ca_cert = X509::from_pem(&mut ca_cert.as_slice());
    // let ca_cert = rustls::Certificate(rustls_pemfile::certs(&mut ca_cert.as_slice())?.remove(0));

    let ca = OpensslAuthority::new(private_key, ca_cert, MessageDigest::sha256(), 1_000)?;
    // let ca = RcgenAuthority::new(private_key, ca_cert, 1_000)?;

    let proxy = ProxyBuilder::new()
        .with_addr(SocketAddr::from(([127, 0, 0, 1], port)))
        .with_rustls_client()
        .with_ca(ca)
        .with_http_handler(ProxyHandler)
        .build();
    tokio::spawn(proxy.start(shutdown_signal()));
    Ok(())
}

async fn shutdown_signal() {
    tokio::signal::ctrl_c()
        .await
        .expect("Failed to install CTRL+C signal handler");
}

fn get_ca_path() -> Result<PathBuf, Box<dyn Error>> {
    Ok(data_dir()
        .ok_or("Cannot open data folder")?
        .join("grasscutter-tools")
        .join("ca"))
}

fn get_ca_path_with(file: &str) -> Result<PathBuf, Box<dyn Error>> {
    Ok(get_ca_path()?.join(file))
}
