import type { OpenDialogOptions } from '@tauri-apps/api/dialog'
import { open } from '@tauri-apps/api/dialog'
import { shell } from '@tauri-apps/api'
import { invoke } from '@tauri-apps/api/tauri'
import { characterDict } from '@/views/mod/constant'

export function select_file<T extends OpenDialogOptions = OpenDialogOptions>(options?: T) {
  return open(options) as Promise<T['multiple'] extends true ? null | string[] : null | string>
}

export function open_dir(path: string) {
  shell.open(path)
}

export async function get_mod_list(path?: string) {
  if (!path) return []
  const result = await invoke<Record<string, { contents: string; name: string }>>('get_mod_list', { path })
  return Object.entries(result).map(([path, modinfo]) => {
    const { contents, name } = modinfo
    const { images, ...other }: ModBasic = convertModBasic(contents, name)
    const enabled = !path.includes('DISABLED_')
    return { path: path.replace(/\\/g, '/'), src: images[0], enabled, images, ...other, iniName: name }
  })
}

function convertModBasic(contents: string, name: string) {
  const basic: ModBasic = JSON.parse(contents)
  const { modId } = basic
  if (!modId) {
    Object.entries(characterDict).forEach(([k, v]) => {
      if (name.toLocaleLowerCase().includes(k)) {
        basic.modId = v
        basic.type = 1
        return false
      }
    })
  }
  if (!basic.type) {
    basic.type = 10
  }
  return basic
}

export function read_local_img(path: string) {
  return invoke<string>('read_local_img', { path })
}

export function rename(path: string, newPath: string) {
  return invoke('rename', { path, newPath })
}

export function write_file(mod: Mod) {
  const { path, id, name, images, submitter, type, modId } = mod
  const contents = JSON.stringify({ id, name, images, submitter, type, modId })
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
  return invoke<string>('proxy_start', { port: Number(port) })
}

export function proxyEnd() {
  return invoke<string>('proxy_end')
}

export function runProgram(path: string) {
  return invoke<string>('run_program', { path: path.replace(/\\/g, '/') })
}

export function runJar(path: string) {
  return invoke<string>('run_jar', { path: path.replace(/\\/g, '/') })
}
