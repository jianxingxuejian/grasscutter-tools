import type { OpenDialogOptions } from '@tauri-apps/api/dialog'
import { open } from '@tauri-apps/api/dialog'
import { shell } from '@tauri-apps/api'
import { invoke } from '@tauri-apps/api/tauri'
import { characterDict } from '@/views/mod/constant'

export function select_file<T extends OpenDialogOptions = OpenDialogOptions>(options?: T) {
  return open(options) as Promise<T['multiple'] extends true ? null | string[] : null | string>
}

export const open_dir = (path: string) => shell.open(path)

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

export const read_local_img = (path: string) => invoke<string>('read_local_img', { path })

export const rename = (path: string, newPath: string) => invoke('rename', { path, newPath })

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

export const installCA = () => invoke<string>('install_ca')

export const setProxyAddr = (addr: string) => invoke('set_proxy_addr', { addr })

export const proxyStart = (port: string) => invoke<string>('proxy_start', { port: Number(port) })

export const proxyEnd = () => invoke<string>('proxy_end')

export const runProgram = (path: string) => invoke<string>('run_program', { path: path.replace(/\\/g, '/') })

export const runJar = (path: string) => invoke<string>('run_jar', { path: path.replace(/\\/g, '/') })

export const executeLuac = (path: string, contents: string) =>
  invoke<string>('execute_luac', { path: path.replace(/\\/g, '/'), contents })
