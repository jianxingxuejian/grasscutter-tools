use hudsucker::{
    async_trait::async_trait,
    certificate_authority::RcgenAuthority,
    hyper::{Body, Request, Response},
    rustls, HttpContext, HttpHandler, ProxyBuilder, RequestOrResponse,
};
use lazy_static::lazy_static;
use rcgen::{
    BasicConstraints, Certificate, CertificateParams, DistinguishedName, DnType, IsCa,
    KeyUsagePurpose,
};
use rustls_pemfile;
use std::error::Error;
use std::fs;
use std::net::SocketAddr;
use std::path::PathBuf;
use std::process::Command;
use std::str::FromStr;
use std::sync::Mutex;
use sysproxy::Sysproxy;
use tauri::{api::path::data_dir, http::Uri};
use tokio::task::JoinHandle;

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

#[cfg(target_os = "windows")]
pub fn install_ca() -> Result<String, Box<dyn Error>> {
    let path_crt = get_ca_path_with("cert.crt")?.display().to_string();
    let cmd_str = "/c certutil -user -addstore root ".to_string() + &path_crt;
    let output = Command::new("cmd").arg(cmd_str).output()?;
    let output_str = String::from_utf8_lossy(&output.stdout);
    Ok(output_str.to_string())
}

#[cfg(target_os = "macos")]
pub fn install_ca() -> Result<String, Box<dyn Error>> {
    let path_crt = get_ca_path_with("cert.crt")?.display().to_string();
    let cmd_str = "add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain "
        .to_string()
        + &path_crt;
    let output = Command::new("security").arg(cmd_str).output()?;
    let output_str = String::from_utf8_lossy(&output.stdout);
    Ok(output_str.to_string())
}

#[cfg(target_os = "linux")]
pub fn install_ca() -> Result<String, Box<dyn Error>> {
    let path = PathBuf::from("/usr/local/share/ca-certificates");
    if !path.exists() {
        fs::create_dir_all(&path)?;
    }
    let path = path.join("grasscutter-tools.crt");
    let path_crt = get_ca_path_with("cert.crt")?.display().to_string();
    fs::copy(path_crt, path)?;

    let output = Command::new("update-ca-certificates").output()?;
    let output_str = String::from_utf8_lossy(&output.stdout);
    Ok(output_str.to_string())
}

lazy_static! {
    static ref SERVER: Mutex<String> = Mutex::new(String::from("http://127.0.0.1:443"));
}

pub fn set_proxy_addr(addr: String) {
    *SERVER.lock().unwrap() = addr
}

static mut TEMP_PROXY: Option<Sysproxy> = None;

pub fn add_setting(port: u16) -> Result<(), Box<dyn Error>> {
    unsafe {
        TEMP_PROXY = Some(Sysproxy::get_system_proxy()?);
    }
    let sysproxy = Sysproxy {
        enable: true,
        host: String::from("127.0.0.1"),
        port,
        bypass: String::from("localhost;127.*;10.*;192.168.*;"),
    };
    sysproxy.set_system_proxy()?;
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

static mut TASK: Option<JoinHandle<Result<(), hudsucker::Error>>> = None;
static mut ENABLE_STATE: bool = false;

pub fn start(port: u16) -> Result<(), Box<dyn Error>> {
    let path_key = get_ca_path_with("private.key")?;
    let private_key = fs::read(path_key)?;
    let private_key = rustls::PrivateKey(
        rustls_pemfile::pkcs8_private_keys(&mut private_key.as_slice())?.remove(0),
    );

    let path_crt = get_ca_path_with("cert.crt")?;
    let ca_cert = fs::read(path_crt)?;
    let ca_cert = rustls::Certificate(rustls_pemfile::certs(&mut ca_cert.as_slice())?.remove(0));

    let ca = RcgenAuthority::new(private_key, ca_cert, 1_000)?;

    let proxy = ProxyBuilder::new()
        .with_addr(SocketAddr::from(([0, 0, 0, 0], port)))
        .with_rustls_client()
        .with_ca(ca)
        .with_http_handler(ProxyHandler)
        .build();
    unsafe {
        if let None = TASK {
            TASK = Some(tokio::spawn(proxy.start(shutdown_signal())));
        }
        ENABLE_STATE = true;
    }
    Ok(())
}

pub fn end() -> Result<(), Box<dyn Error>> {
    stop_proxy()?;
    unsafe {
        if let Some(task) = &TASK {
            task.abort();
            TASK = None;
        }
        ENABLE_STATE = false;
    }
    Ok(())
}

pub fn get_enable_state() -> bool {
    unsafe { ENABLE_STATE }
}

pub fn stop_proxy() -> Result<(), Box<dyn Error>> {
    unsafe {
        if let Some(temp_proxy) = &TEMP_PROXY {
            temp_proxy.set_system_proxy()?;
        } else {
            match Sysproxy::get_system_proxy() {
                Ok(mut sysproxy) => {
                    sysproxy.enable = false;
                    sysproxy.set_system_proxy()?;
                }
                Err(_) => {
                    let new_proxy = Sysproxy {
                        enable: false,
                        host: String::from("127.0.0.1"),
                        port: 8080,
                        bypass: String::new(),
                    };
                    new_proxy.set_system_proxy()?;
                }
            }
        }
    }
    Ok(())
}

pub fn before_exit() {
    stop_proxy().ok();
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
