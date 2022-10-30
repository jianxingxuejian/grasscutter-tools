#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use tauri_plugin_store::PluginBuilder;
mod cmd;
use crate::cmd::{download, get_mod_list, http, read_local_img, rename, write_file};

fn main() {
    tauri::Builder::default()
        .plugin(PluginBuilder::default().build())
        .invoke_handler(tauri::generate_handler![
            get_mod_list,
            http,
            read_local_img,
            rename,
            write_file,
            download
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
