use std::collections::HashMap;
use std::ffi::OsStr;
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
