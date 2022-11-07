use std::collections::HashMap;
use std::error::Error;
use std::fmt;
use std::path::Path;

pub mod file;
pub mod http;

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
