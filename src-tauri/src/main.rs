#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use cmd::proxy;
mod cmd;
use crate::cmd::{
    download, execute_luac, get_enable_state, get_mod_list, http, install_ca, proxy_end,
    proxy_start, rename, run_jar, run_program, set_proxy_addr, write_file,
};

fn main() {
    let builder = tauri::Builder::default()
        .plugin(tauri_plugin_store::Builder::default().build())
        .invoke_handler(tauri::generate_handler![
            get_mod_list,
            http,
            rename,
            write_file,
            download,
            install_ca,
            set_proxy_addr,
            proxy_start,
            proxy_end,
            run_program,
            run_jar,
            execute_luac,
            get_enable_state
        ]);
    let app = builder
        .build(tauri::generate_context!())
        .expect("error while running tauri application");
    app.run(|app_handle, event| match event {
        tauri::RunEvent::ExitRequested { api, .. } => {
            api.prevent_exit();
            proxy::before_exit();
            tauri::AppHandle::exit(app_handle, 0);
        }
        _ => {}
    });
}
