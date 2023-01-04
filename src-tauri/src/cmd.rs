use std::collections::HashMap;
use std::error::Error;
use std::fmt;
use std::path::Path;

use self::file::ModInfo;

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
pub fn get_mod_list(path: String) -> HashMap<String, ModInfo> {
    return file::get_mod_list(path);
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
pub async fn run_program(path: String, args: Option<String>) -> CmdResult<String> {
    let result = system::run_program(path, args);
    wrap_result!(result)
}

#[tauri::command]
pub async fn run_jar(path: String) -> CmdResult {
    let result = system::run_jar(path);
    wrap_result!(result)
}

#[tauri::command]
pub fn execute_luac(path: String, contents: String) -> CmdResult<String> {
    let result = system::execute_luac(path, contents);
    wrap_result!(result)
}

#[tauri::command]
pub fn get_enable_state() -> bool {
    proxy::get_enable_state()
}
