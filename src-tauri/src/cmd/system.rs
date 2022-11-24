use std::error::Error;
use std::process::{Command, Output};

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

fn return_output(output: Output) -> Result<String, Box<dyn Error>> {
    if output.status.success() {
        let output_str = String::from_utf8(output.stdout)?;
        Ok(output_str)
    } else {
        let output_str = String::from_utf8(output.stderr)?;
        Err(output_str.into())
    }
}
