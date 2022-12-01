use std::collections::HashMap;
use std::error::Error;
use std::fmt;
use std::path::Path;

pub mod file;
pub mod http;
pub mod proxy;
pub mod system;

type CmdResult<T = ()> = Result<T, String>;

#[macro_export]
macro_rules! wrap_result {
    ($stat: expr) => {
        match $stat {
            Ok(a) => Ok(a),
            Err(err) => Err(format!("{}", err.to_string())),
        }
    };
}

#[derive(Debug)]
pub enum MyError {
    IOError,
    RarError,
}

impl fmt::Display for MyError {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        match self {
            MyError::IOError => write!(f, "IOError"),
            MyError::RarError => write!(f, "RarError"),
        }
    }
}

impl Error for MyError {}

#[tauri::command]
pub async fn http(
    method: String,
    url: String,
    params: Option<serde_json::Value>,
    headers: http::Headers,
    proxy: http::Proxy,
) -> CmdResult<String> {
    let result = http::request(method, url, params, headers, proxy).await;
    wrap_result!(result)
}

#[tauri::command]
pub fn get_mod_list(path: String) -> Result<HashMap<String, String>, ()> {
    let result = file::get_mod_list(path);
    if result.is_empty() {
        return Err(());
    }
    Ok(result)
}

#[tauri::command]
pub fn rename(path: String, new_path: String) -> CmdResult {
    let result = file::rename(path, new_path);
    wrap_result!(result)
}

#[tauri::command]
pub fn write_file(path: String, contents: String) -> CmdResult {
    let result = file::write_file(path, contents);
    wrap_result!(result)
}

#[tauri::command]
pub async fn read_local_img(path: String) -> CmdResult<String> {
    let result = file::read_local_img(path);
    wrap_result!(result)
}

#[tauri::command]
pub async fn download(url: String, path: String, contents: String) -> CmdResult {
    let path = Path::new(&path);
    http::download(url, path).await.ok();
    let extension = path
        .extension()
        .ok_or("Extension error")?
        .to_str()
        .ok_or("Os to str error")?;
    match extension {
        "zip" => file::unzip(path),
        "rar" => file::unrar(path),
        "7z" => file::un7z(path),
        _ => Err("Unsupported extension".into()),
    }
    .ok();
    let path = path
        .with_extension("")
        .join("modinfo.json")
        .as_path()
        .display()
        .to_string();
    let result = file::write_file(path, contents);
    wrap_result!(result)
}

#[tauri::command]
pub fn install_ca() -> CmdResult<String> {
    proxy::generate_ca().ok();
    let result = proxy::install_ca();
    wrap_result!(result)
}

#[tauri::command]
pub fn set_proxy_addr(addr: String) {
    proxy::set_proxy_addr(addr)
}

#[tauri::command]
pub async fn proxy_start(port: u16) -> CmdResult {
    proxy::add_setting(port).ok();
    let result = proxy::start(port);
    wrap_result!(result)
}

#[tauri::command]
pub async fn proxy_end() -> CmdResult {
    let result = proxy::end();
    wrap_result!(result)
}

#[tauri::command]
pub async fn run_program(path: String) -> CmdResult<String> {
    let result = system::run_program(path);
    wrap_result!(result)
}

#[tauri::command]
pub async fn run_jar(path: String) -> CmdResult {
    let result = system::run_jar(path);
    wrap_result!(result)
}
