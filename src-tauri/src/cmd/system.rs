use base64::engine::general_purpose;
use base64::Engine;
use std::error::Error;
use std::fs;
use std::fs::File;
use std::io::Write;
use std::path::{Path, PathBuf};
use std::process::{Child, Command, Output};
use tauri::api::path::data_dir;

#[cfg(target_os = "windows")]
use std::os::windows::process::CommandExt;

#[cfg(target_os = "windows")]
pub fn run_program(path: String, args: Option<String>) -> Result<String, Box<dyn Error>> {
    let index = path.rfind("/").ok_or("path fail")?;
    let (path, file) = path.split_at(index + 1);
    let cmd_str = format!(
        "/c cd /d {} && start \"\" \"{}\" {}",
        path,
        file,
        args.map_or("".to_string(), |s| s)
    );
    let output = Command::new("cmd").raw_arg(cmd_str).output()?;
    return_output(output)
}

#[cfg(not(target_os = "windows"))]
pub fn run_program(path: String, args: Option<String>) -> Result<String, Box<dyn Error>> {
    let cmd_str = format!("-c open {} {}", path, args.map_or("".to_string(), |s| s));
    let output = Command::new("bash").arg(cmd_str).output()?;
    return_output(output)
}

#[cfg(target_os = "windows")]
pub fn run_jar(path: String) -> Result<(), Box<dyn Error>> {
    let index = path.rfind("/").ok_or("path error")?;
    let (path, file) = path.split_at(index + 1);
    let cmd_str = if file.ends_with("jar") {
        format!("/k cd /d {} && java -jar {}", path, file)
    } else {
        format!("/c cd /d {} && {}", path, file)
    };
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
    let lua_path = write_lua(contents)?;
    let index = path.rfind("/").ok_or("path error")?;
    let (path, file) = path.split_at(index + 1);
    let cmd_str = format!(
        "/c cd /d {} && .\\{} -o dev.luac {}",
        path,
        file,
        lua_path.display()
    );
    let child = Command::new("cmd").raw_arg(cmd_str).spawn()?;
    return_luac(child, path)
}

#[cfg(not(target_os = "windows"))]
pub fn execute_luac(path: String, contents: String) -> Result<String, Box<dyn Error>> {
    let lua_path = write_lua(contents)?;
    let cmd_str = format!("-c {} -o dev.luac {}", path, lua_path.display());
    let child = Command::new("bash").arg(cmd_str).spawn()?;
    return_luac(child, &path)
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

fn write_lua(contents: String) -> Result<PathBuf, Box<dyn Error>> {
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
    Ok(lua_path)
}

fn return_luac(child: Child, path: &str) -> Result<String, Box<dyn Error>> {
    let output = child.wait_with_output()?;
    if !output.status.success() {
        let output_str = String::from_utf8(output.stderr)?;
        return Err(output_str.into());
    }
    let out_path = Path::new(path).join("dev.luac");
    let bytes = fs::read(out_path)?;
    let result = general_purpose::STANDARD.encode(&bytes);
    Ok(result)
}
