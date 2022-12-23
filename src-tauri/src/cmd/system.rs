use std::error::Error;
use std::fs;
use std::fs::File;
use std::io::{Read, Write};
use std::path::Path;
use std::process::{Command, Output};
use tauri::api::path::data_dir;

#[cfg(target_os = "windows")]
use std::os::windows::process::CommandExt;

#[cfg(target_os = "windows")]
pub fn run_program(path: String) -> Result<String, Box<dyn Error>> {
    let index = path.rfind("/").ok_or("path fail")?;
    let (path, file) = path.split_at(index + 1);
    let cmd_str = format!("/c cd /d {} && start \"\" \"{}\"", path, file);
    let output = Command::new("cmd").raw_arg(cmd_str).output()?;
    return_output(output)
}

#[cfg(not(target_os = "windows"))]
pub fn run_program(path: String) -> Result<String, Box<dyn Error>> {
    let cmd_str = format!("-c open {}", path);
    let output = Command::new("bash").arg(cmd_str).output()?;
    return_output(output)
}

#[cfg(target_os = "windows")]
pub fn run_jar(path: String) -> Result<(), Box<dyn Error>> {
    let index = path.rfind("/").ok_or("path fail")?;
    let (path, file) = path.split_at(index + 1);
    let cmd_str = format!("/k cd /d {} && java -jar {}", path, file);
    open::with(cmd_str, "cmd.exe")?;
    Ok(())
}

#[cfg(not(target_os = "windows"))]
pub fn run_jar(path: String) -> Result<(), Box<dyn Error>> {
    let cmd_str = format!("-c java -jar {}", path);
    open::with(cmd_str, "shell")?;
    Ok(())
}

#[cfg(target_os = "windows")]
pub fn execute_luac(path: String, contents: String) -> Result<String, Box<dyn Error>> {
    let parent = data_dir()
        .ok_or("Cannot open data folder")?
        .join("grasscutter-tools")
        .join("lua");
    let lua_path = parent.join("dev.lua");
    if !parent.exists() {
        fs::create_dir_all(&parent)?;
    }
    let mut file = File::create(&lua_path)?;
    file.write_all(contents.as_bytes())?;
    let index = path.rfind("/").ok_or("path fail")?;
    let (path, file) = path.split_at(index + 1);
    let cmd_str = format!("/c cd /d {} && .\\{} {}", path, file, lua_path.display());
    let child = Command::new("cmd").raw_arg(cmd_str).spawn()?;
    let output = child.wait_with_output()?;
    if !output.status.success() {
        let output_str = String::from_utf8(output.stderr)?;
        return Err(output_str.into());
    }
    let out_path = Path::new(&path).join("luac.out");
    let mut out_file = File::open(&out_path)?;
    let mut buf = Vec::new();
    out_file.read_to_end(&mut buf)?;
    let result = String::from_utf8_lossy(&buf).to_string();
    Ok(result)
}

fn return_output(output: Output) -> Result<String, Box<dyn Error>> {
    if output.status.success() {
        let output_str = String::from_utf8(output.stdout)?;
        Ok(output_str)
    } else {
        let output_str = String::from_utf8(output.stderr)?;
        Err(output_str.into())
    }
}
