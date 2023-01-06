use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use std::error::Error;
use std::ffi::OsStr;
use std::fs;
use std::fs::File;
use std::io;
use std::io::{Read, Write};
use std::path::Path;
use walkdir::WalkDir;

use super::MyError;

#[derive(Serialize, Deserialize)]
pub struct ModInfo {
    pub contents: String,
    pub name: String,
    pub local_img: Vec<String>,
}

pub fn get_mod_list(path: String) -> HashMap<String, ModInfo> {
    let path = Path::new(&path);
    let ini = Some(OsStr::new("ini"));
    let merged = Some(OsStr::new("merged.ini"));
    let mut map = HashMap::new();
    for entry in WalkDir::new(path) {
        let result = || -> Option<(String, ModInfo)> {
            let entry = entry.ok()?;
            let path = entry.path();
            if path.extension() != ini {
                return None;
            }
            if path.file_name() == merged {
                let target = path.parent()?;
                if is_deep_merge(target, ini) == Some(false) {
                    return get_info(target, path);
                }
                return None;
            }
            let target = path.parent()?.parent()?;
            let merged = target.join("merged.ini");
            if merged.exists() {
                return None;
            }
            return get_info(target, path);
        };
        match result() {
            Some((path, mod_info)) => {
                map.insert(path, mod_info);
            }
            None => continue,
        }
    }
    map
}

fn get_info(target: &Path, path: &Path) -> Option<(String, ModInfo)> {
    let name = path.file_stem().unwrap().to_string_lossy().to_string();
    let modinfo = target.join("modinfo.json");
    let contents = if modinfo.exists() {
        let mut file = File::open(&modinfo).ok()?;
        let mut contents = String::new();
        file.read_to_string(&mut contents).ok()?;
        contents
    } else {
        let contents =
            "{\"id\":0,\"name\":\"\",\"images\":[],\"submitter\":{\"name\":\"\",\"url\":\"\"}}"
                .to_string();
        let mut file = File::create(&modinfo).ok()?;
        file.write(contents.as_bytes()).ok();
        contents
    };
    let local_img = read_local_img(&target).expect("Read local img fail");
    return Some((
        target.display().to_string(),
        ModInfo {
            contents,
            name,
            local_img,
        },
    ));
}

fn is_deep_merge(path: &Path, ini: Option<&OsStr>) -> Option<bool> {
    let entries = fs::read_dir(path).ok()?;
    for entry in entries {
        let path = entry.ok()?.path();
        if !path.is_dir() {
            continue;
        }

        let entries = fs::read_dir(path).ok()?;
        for entry in entries {
            if entry.ok()?.path().extension() == ini {
                return Some(false);
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

const EXTS: &'static [&'static str] = &["png", "jpg", "jpeg", "jfif"];

fn read_local_img(path: &Path) -> Result<Vec<String>, Box<dyn Error>> {
    let mut local_img = Vec::new();
    let dir = fs::read_dir(path)?;
    for entry in dir {
        let path = entry?.path();
        if !path.is_file() {
            continue;
        }
        let extension = path
            .extension()
            .and_then(OsStr::to_str)
            .ok_or(MyError::IOError)?;
        if EXTS.contains(&extension) {
            local_img.push(path.display().to_string());
        }
    }
    Ok(local_img)
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
