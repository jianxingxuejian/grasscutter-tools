use std::collections::HashMap;
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
pub async fn download(url: String, path: String) -> CmdResult {
    let path = Path::new(&path);
    http::download(url, path).await.ok();
    let extension = path.extension().ok_or("")?.to_str().ok_or("")?;
    let result = match extension {
        "zip" => file::unzip(path),
        "rar" => file::unrar(path),
        "7z" => file::un7z(path),
        _ => Err("Unsupported extension".into()),
    };
    wrap_result!(result)
}
