use base64::encode;
use std::collections::HashMap;
use std::error::Error;
use std::ffi::OsStr;
use std::fs;
use std::fs::File;
use std::io;
use std::io::{Read, Write};
use std::path::{Path, PathBuf};
use walkdir::WalkDir;

use super::MyError;

pub fn get_mod_list(path: String) -> HashMap<String, String> {
    let path = Path::new(&path);
    let ini = Some(OsStr::new("ini"));
    let merged = Some(OsStr::new("merged.ini"));
    let mut map = HashMap::new();
    for entry in WalkDir::new(path) {
        let result = || -> Option<(String, String)> {
            let entry = entry.ok()?;
            if entry.path().extension() != ini {
                return None;
            }
            if entry.path().file_name() == merged {
                let parent = entry.path().parent()?;
                if is_deep_merge(parent, ini) == Some(false) {
                    let modinfo = parent.join("modinfo.json");
                    return init_ini(modinfo, parent);
                }
                return None;
            }
            let parent = entry.path().parent()?.parent()?;
            let parent_merged = parent.join("merged.ini");
            if parent_merged.exists() {
                return None;
            }
            let modinfo = parent.join("modinfo.json");
            return init_ini(modinfo, parent);
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

fn init_ini(modinfo: PathBuf, target: &Path) -> Option<(String, String)> {
    if modinfo.exists() {
        let mut file = File::open(&modinfo).ok()?;
        let mut info = String::new();
        file.read_to_string(&mut info).ok()?;
        return Some((target.display().to_string(), info));
    } else {
        let info =
            "{\"id\":0,\"name\":\"\",\"images\":[],\"submitter\":{\"name\":\"\",\"url\":\"\"}}";
        let mut file = File::create(&modinfo).ok()?;
        file.write(info.as_bytes()).ok();
        return Some((target.display().to_string(), info.to_string()));
    }
}

fn is_deep_merge(path: &Path, ini: Option<&OsStr>) -> Option<bool> {
    let entries = fs::read_dir(path).ok()?;
    for entry in entries {
        let path = entry.ok()?.path();
        if path.is_dir() {
            let entries = fs::read_dir(path).ok()?;
            for entry in entries {
                if entry.ok()?.path().extension() == ini {
                    return Some(false);
                }
            }
        }
    }
    return Some(true);
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
        let extension = path
            .extension()
            .ok_or(MyError::IOError)?
            .to_str()
            .ok_or(MyError::IOError)?;
        if exts.contains(&extension) {
            let mut file = File::open(&path)?;
            file.read_to_end(&mut contents)?;
            return Ok("data:image/".to_string() + &extension + ";base64," + &encode(&contents));
        }
    }
    return Err("Local_img not found".into());
}

pub fn unzip(path: &Path) -> Result<(), Box<dyn Error>> {
    let zip_file = File::open(path)?;
    let mut archive = zip::ZipArchive::new(zip_file)?;
    let target = path.with_extension("");
    for i in 0..archive.len() {
        let mut file = archive.by_index(i)?;
        if file.is_dir() {
            let target = target.join(Path::new(&file.name().replace("\\", "")));
            fs::create_dir_all(target)?;
        } else {
            let file_path = target.join(Path::new(file.name()));
            fs::create_dir_all(file_path.parent().ok_or(MyError::IOError)?)?;
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

pub fn unrar(path: &Path) -> Result<(), Box<dyn Error>> {
    let target = path.with_extension("");
    fs::create_dir_all(&target)?;
    let target = target
        .as_path()
        .to_str()
        .ok_or(MyError::IOError)?
        .to_string();
    let archive = unrar::Archive::new(path.to_str().ok_or(MyError::IOError)?.to_string());

    archive
        .extract_to(target)
        .map_err(|_| MyError::RarError)?
        .process()
        .map_err(|_| MyError::RarError)?;
    Ok(())
}

pub fn un7z(path: &Path) -> Result<(), Box<dyn Error>> {
    let target = path.with_extension("");
    fs::create_dir_all(&target)?;
    sevenz_rust::decompress_file(path, target).expect("complete");
    Ok(())
}
