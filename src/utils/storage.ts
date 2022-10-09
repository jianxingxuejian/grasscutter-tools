import { Store } from 'tauri-plugin-store-api'
import { useSettingStore } from '@/stores'

const store = new Store('.settings')

export async function setSetting(key: string, value: any) {
  try {
    await store.set(key, value)
    await saveSetting()
  } catch {
    window.$message?.error('set settings failed')
  }
}

export async function getSetting<T>(key: string) {
  try {
    return await store.get<T>(key)
  } catch {
    window.$message?.error('get settings failed')
  }
}

export async function saveSetting() {
  try {
    await store.save()
  } catch {
    window.$message?.error('save settings failed')
  }
}

export async function remove(key: string) {
  try {
    await store.delete(key)
  } catch {
    window.$message?.error('remove settings failed')
  }
}

export async function clear() {
  try {
    await store.clear()
  } catch {
    window.$message?.error('clear settings failed')
  }
}

export async function loadSetting() {
  try {
    await store.load()
    const server = await getSetting<Setting['server']>('server')
    const token = await getSetting<Setting['token']>('token')
    const admin_token = await getSetting<Setting['admin_token']>('admin_token')
    const locale = await getSetting<Setting['locale']>('locale')
    const theme = await getSetting<Setting['theme']>('theme')
    const mod = await getSetting<Setting['mod']>('mod')
    const proxy = await getSetting<Setting['proxy']>('proxy')

    const settingStore = useSettingStore()
    settingStore.initSettings({ server, token, admin_token, locale, theme, mod, proxy })
  } catch {
    window.$message?.error('load settings failed')
  }
}
