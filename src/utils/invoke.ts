import type { OpenDialogOptions } from '@tauri-apps/api/dialog'
import { open } from '@tauri-apps/api/dialog'
import { shell } from '@tauri-apps/api'
import { invoke } from '@tauri-apps/api/tauri'

export async function select_file<T extends OpenDialogOptions = OpenDialogOptions>(options?: T) {
  return open(options) as Promise<T['multiple'] extends true ? null | string[] : null | string>
}

export async function open_dir(path: string) {
  shell.open(path)
}

export async function get_mod_list(path?: string) {
  const modList: Mod[] = []
  if (!path) return modList
  const mod_list = await invoke<Record<string, string>>('get_mod_list', { path })
  Object.entries(mod_list).forEach(([k, v]) => {
    const mod = JSON.parse(v)
    modList.push({ path: k.replace(/\\/g, '/'), enabled: !k.includes('DISABLED_'), ...mod })
  })
  return modList
}

export async function read_local_img(path: string) {
  return await invoke<string>('read_local_img', { path })
}

export async function rename(path: string, newPath: string) {
  await invoke('rename', { path, newPath })
}

export async function write_file(mod: Mod) {
  const { path, id, name, images, submitter } = mod
  const contents = JSON.stringify({ id, name, images, submitter })
  await invoke('write_file', { path: path + '/modinfo.json', contents })
}
