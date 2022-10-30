use serde::{Deserialize, Serialize};
use std::error::Error;
use std::fs::create_dir_all;
use std::fs::File;
use std::io::copy;
use std::io::Cursor;
use std::path::Path;

pub async fn request(
    method: String,
    url: String,
    params: Option<serde_json::Value>,
    headers: Headers,
    proxy: Proxy,
) -> Result<String, reqwest::Error> {
    let mut builder = reqwest::Client::builder();

    if proxy.enable {
        if let Some(port) = proxy.port {
            let proxy = reqwest::Proxy::http(format!("{}{}", "127.0.0.1:", port))?;
            builder = builder.proxy(proxy);
        }
    } else {
        builder = builder.no_proxy();
    }

    let client = builder.danger_accept_invalid_certs(true).build()?;

    let method = match method.as_str() {
        "GET" => reqwest::Method::GET,
        "POST" => reqwest::Method::POST,
        "PUT" => reqwest::Method::PUT,
        "DELETE" => reqwest::Method::DELETE,
        "PATCH" => reqwest::Method::PATCH,
        "HEAD" => reqwest::Method::HEAD,
        "OPTIONS" => reqwest::Method::OPTIONS,
        _ => reqwest::Method::GET,
    };

    let result = client
        .request(method, url)
        .header("locale", headers.locale)
        .header("token", headers.token)
        .header("admin_token", headers.admin_token)
        .json(&params)
        .send()
        .await?
        .text()
        .await?;
    Ok(result)
}

pub async fn download(url: String, path: String) -> Result<(), Box<dyn Error>> {
    let response = reqwest::get(url).await?;
    let data = response.bytes().await?;
    let path = Path::new(&path);
    create_dir_all(path.parent().ok_or("")?)?;
    let mut file = File::create(path)?;
    let mut content = Cursor::new(data);
    copy(&mut content, &mut file)?;
    let zip_file = File::open(path)?;
    let mut archive = zip::ZipArchive::new(zip_file)?;
    let target = path.with_extension("");
    // println!("target: {}", target.display());
    for i in 0..archive.len() {
        let mut file = archive.by_index(i)?;
        if file.is_dir() {
            let target = target.join(Path::new(&file.name().replace("\\", "")));
            // println!("target: {}", target.display());
            create_dir_all(target)?;
        } else {
            let file_path = target.join(Path::new(file.name()));
            // println!("file_path: {}", file_path.display());
            create_dir_all(file_path.parent().ok_or("")?)?;
            let mut target_file = if !file_path.exists() {
                File::create(file_path)?
            } else {
                File::open(file_path)?
            };
            copy(&mut file, &mut target_file)?;
        }
    }
    Ok(())
}

#[derive(Serialize, Deserialize)]
pub struct Headers {
    pub locale: String,
    pub token: String,
    pub admin_token: String,
}

#[derive(Serialize, Deserialize)]
pub struct Proxy {
    pub enable: bool,
    pub port: Option<u16>,
}
