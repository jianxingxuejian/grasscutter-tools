#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

mod file;
mod http;
mod mitm;

#[tauri::command]
async fn http(
    method: String,
    url: String,
    params: Option<serde_json::Value>,
    headers: http::Headers,
) -> Result<String, String> {
    let result = http::request(method, url, params, headers).await;
    let result = match result {
        Ok(result) => result,
        Err(err) => err.to_string(),
    };
    Ok(result)
}

use tauri_plugin_store::PluginBuilder;

fn main() {
    tauri::Builder::default()
        .plugin(PluginBuilder::default().build())
        .invoke_handler(tauri::generate_handler![http])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
