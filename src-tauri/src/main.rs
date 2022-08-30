#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

mod file;
mod http;

use tauri_plugin_store::PluginBuilder;

use crate::file::get_mod_list;
use crate::http::http;

fn main() {
    tauri::Builder::default()
        .plugin(PluginBuilder::default().build())
        .invoke_handler(tauri::generate_handler![http, get_mod_list])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
