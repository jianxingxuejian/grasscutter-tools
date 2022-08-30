use app::unwrap_else;
use app::unwrap_or;
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
        let entry = entry.unwrap();
        if entry.path().extension() != ini {
            continue;
        }
        let mod_dir = unwrap_or!(entry.path().parent(), continue);
        let parent = unwrap_or!(mod_dir.parent(), continue);

        let modinfo = parent.join("modinfo.json");
        print!("{}", modinfo.display());
        if modinfo.exists() {
            let mut file = File::open(&modinfo).unwrap();
            let mut string = String::new();
            file.read_to_string(&mut string).unwrap();
            map.insert(parent.display().to_string(), string);
        } else {
            let string = "{\"id\":0,\"name\":\"\",\"images\":[],\"submitter\":{\"name\":\"\",\"url\":\"\"},\"nsfw\":false,\"likes\":0,\"views\":0,\"type\":\"Mod\"}";
            let mut file = File::create(&modinfo).unwrap();
            unwrap_else!(file.write(string.as_bytes()), continue);
            map.insert(parent.display().to_string(), string.to_string());
        }
    }
    map
}
