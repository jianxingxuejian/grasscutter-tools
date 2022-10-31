use base64::encode;
use std::collections::HashMap;
use std::error::Error;
use std::ffi::OsStr;
use std::fs;
use std::fs::File;
use std::io;
use std::io::{Read, Write};
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
    let exts: Vec<&str> = vec!["png", "jpg", "jpeg", "jfif"];
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

pub fn unzip(path: &str) -> Result<(), Box<dyn Error>> {
    let path = Path::new(path);
    let zip_file = File::open(path)?;
    let mut archive = zip::ZipArchive::new(zip_file)?;
    let target = path.with_extension("");
    for i in 0..archive.len() {
        let mut file = archive.by_index(i)?;
        if file.is_dir() {
            let target = target.join(Path::new(&file.name().replace("\\", "")));
            // println!("target: {}", target.display());
            fs::create_dir_all(target)?;
        } else {
            let file_path = target.join(Path::new(file.name()));
            // println!("file_path: {}", file_path.display());
            fs::create_dir_all(file_path.parent().ok_or("")?)?;
            let mut target_file = if !file_path.exists() {
                File::create(file_path)?
            } else {
                File::open(file_path)?
            };
            io::copy(&mut file, &mut target_file)?;
        }
    }
    Ok(())
}
