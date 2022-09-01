use base64::encode;
use std::collections::HashMap;
use std::error::Error;
use std::ffi::OsStr;
use std::fs;
use std::fs::File;
use std::io::Read;
use std::io::Write;
use std::path::Path;
use walkdir::WalkDir;

pub fn get_mod_list(path: String) -> HashMap<String, String> {
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

pub fn rename(path: String, new_path: String) -> Result<(), Box<dyn Error>> {
    let path = Path::new(&path);
    fs::rename(path, new_path)?;
    Ok(())
}

pub fn write_file(path: String, contents: String) -> Result<(), Box<dyn Error>> {
    let path = Path::new(&path);
    let mut file = File::create(path)?;
    file.write_all(contents.as_bytes())?;
    Ok(())
}

pub fn read_local_img(path: String) -> Result<String, Box<dyn Error>> {
    let exts: Vec<&str> = vec!["png", "jpg", "jpeg"];
    let path = Path::new(&path);
    let mut contents = Vec::new();

    let dir = fs::read_dir(path)?;
    for entry in dir {
        let path = entry?.path();
        if !path.is_file() {
            continue;
        }
        let extension = path.extension().ok_or("")?.to_str().ok_or("")?;
        if exts.contains(&extension) {
            let mut file = File::open(&path)?;
            file.read_to_end(&mut contents)?;
            return Ok("data:image/".to_string() + &extension + ";base64," + &encode(&contents));
        }
    }
    return Err("Local_img not found".into());
}
