import type { OpenDialogOptions } from '@tauri-apps/api/dialog'
import { open } from '@tauri-apps/api/dialog'
import { shell } from '@tauri-apps/api'
import { invoke } from '@tauri-apps/api/tauri'

export function select_file<T extends OpenDialogOptions = OpenDialogOptions>(options?: T) {
  return open(options) as Promise<T['multiple'] extends true ? null | string[] : null | string>
}

export function open_dir(path: string) {
  shell.open(path)
}

export async function get_mod_list(path?: string) {
  const modList: Mod[] = []
  if (!path) return modList
  const mod_list = await invoke<Record<string, string>>('get_mod_list', { path })
  Object.entries(mod_list).forEach(([k, v]) => {
    const mod = JSON.parse(v)
    modList.push({ path: k.replace(/\\/g, '/'), enabled: !k.includes('DISABLED_'), src: mod.images[0], ...mod })
  })
  return modList
}

export function read_local_img(path: string) {
  return invoke<string>('read_local_img', { path })
}

export function rename(path: string, newPath: string) {
  return invoke('rename', { path, newPath })
}

export function write_file(mod: Mod) {
  const { path, id, name, images, submitter } = mod
  const contents = JSON.stringify({ id, name, images, submitter })
  return invoke('write_file', { path: path + '/modinfo.json', contents })
}

export function download(url: string, path: string, mod: ModBasic) {
  const { id, name, images, submitter } = mod
  const contents = JSON.stringify({ id, name, images, submitter })
  return invoke('download', { url, path, contents })
}

export function installCA() {
  return invoke<string>('install_ca')
}

export function setProxyAddr(addr: string) {
  return invoke('set_proxy_addr', { addr })
}

export function proxyStart(port: string) {
  return invoke<string>('proxy_start', { port })
}

export function proxyEnd() {
  return invoke<string>('proxy_end')
}

export function runProgram(path: string) {
  return invoke<string>('run_program', { path: path.replace(/\\/g, '/') })
}
