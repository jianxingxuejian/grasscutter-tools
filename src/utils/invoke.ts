import type { OpenDialogOptions } from '@tauri-apps/api/dialog'
import { shell, dialog } from '@tauri-apps/api'
import { invoke, convertFileSrc } from '@tauri-apps/api/tauri'
import { characterDict } from '@/views/mod/constant'

export function select_file<T extends OpenDialogOptions = OpenDialogOptions>(options?: T) {
  return dialog.open(options) as Promise<T['multiple'] extends true ? null | string[] : null | string>
}

export const open_dir = (path: string) => shell.open(path)

type ModListResult = Record<string, { contents: string; name: string; local_img: string[] }>

export async function get_mod_list(path?: string): Promise<Mod[]> {
  if (!path) return []
  const result = await invoke<ModListResult>('get_mod_list', { path })
  return Object.entries(result).map(([path, modinfo]) => {
    const { contents, name, local_img } = modinfo
    const { images, ...other }: ModBasic = convertModBasic(contents, name)
    const enabled = !path.includes('DISABLED_')
    let src = images[0]
    if (!src && local_img.length > 0) {
      src = convertFileSrc(local_img[0])
    }
    return {
      path: path.replace(/\\/g, '/'),
      src,
      enabled,
      images,
      ...other,
      iniName: name
    }
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

export const runProgram = (path: string, args?: string) =>
  invoke<string>('run_program', { path: path.replace(/\\/g, '/'), args })

export const runJar = (path: string) => invoke<string>('run_jar', { path: path.replace(/\\/g, '/') })

export const executeLuac = (path: string, contents: string) =>
  invoke<string>('execute_luac', { path: path.replace(/\\/g, '/'), contents })

export const getEnableState = () => invoke<boolean>('get_enable_state')
