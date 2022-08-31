use std::collections::HashMap;
use std::ffi::OsStr;
use std::fs;
use std::fs::File;
use std::io::Read;
use std::io::Write;
use std::path::Path;
use walkdir::WalkDir;

#[tauri::command]
pub async fn get_mod_list(path: String) -> HashMap<String, String> {
    let path = Path::new(&path);
    let ini = Some(OsStr::new("ini"));
    let mut map = HashMap::new();
    for entry in WalkDir::new(path) {
        let result = || -> Option<(String, String)> {
            let entry = entry.ok()?;
            if entry.path().extension() != ini {
                return None;
            }
            let parent = entry.path().parent()?.parent()?;
            let modinfo = parent.join("modinfo.json");
            if modinfo.exists() {
                let mut file = File::open(&modinfo).unwrap();
                let mut info = String::new();
                file.read_to_string(&mut info).unwrap();
                return Some((parent.display().to_string(), info));
            } else {
                let info = "{\"id\":0,\"name\":\"\",\"images\":[],\"submitter\":{\"name\":\"\",\"url\":\"\"},\"nsfw\":false,\"likes\":0,\"views\":0,\"type\":\"Mod\"}";
                let mut file = File::create(&modinfo).unwrap();
                file.write(info.as_bytes()).ok();
                return Some((parent.display().to_string(), info.to_string()));
            }
        };
        match result() {
            Some((k, v)) => {
                map.insert(k, v);
            }
            None => continue,
        }
    }
    map
}

#[tauri::command]
pub fn rename(path: String, new_path: String) -> Result<(), String> {
    let path = check_path(&path)?;
    fs::rename(path, new_path).map_err(|e| e.to_string())?;
    Ok(())
}

#[tauri::command]
pub fn write_file(path: String, contents: String) -> Result<(), String> {
    let path = check_path(&path)?;
    let file = File::create(path).map_err(|e| e.to_string())?;
    file.write_all(contents.as_bytes())
        .map_err(|e| e.to_string())?;
    Ok(())
}

fn check_path(path: &String) -> Result<&Path, String> {
    let path = Path::new(path);
    if !path.exists() {
        return Err("File doesn't exist".to_string());
    }
    Ok(path)
}
