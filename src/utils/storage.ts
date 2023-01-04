import { Store } from 'tauri-plugin-store-api'
import { useSettingStore } from '@/stores'
import isTauri from '@/utils/is-tauri'

const store = new Store('.settings')

export async function setSetting(key: string, value: any) {
  if (isTauri) {
    try {
      await store.set(key, value)
      await saveSetting()
    } catch {
      window.$message?.error('set settings failed')
    }
  } else {
    window.localStorage.setItem(key, JSON.stringify(value))
  }
}

export async function getSetting<T>(key: string) {
  if (isTauri) {
    try {
      return await store.get<T>(key)
    } catch {
      window.$message?.error('get settings failed')
    }
  } else {
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    } else {
      return value
    }
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
  if (isTauri) {
    try {
      await store.delete(key)
    } catch {
      window.$message?.error('remove settings failed')
    }
  } else {
    window.localStorage.removeItem(key)
  }
}

export async function clear() {
  try {
    await store.clear()
  } catch {
    window.$message?.error('clear settings failed')
  }
}

export async function loadClientSetting() {
  try {
    await store.load()
    const server = (await getSetting('server')) as Setting['server'] | null
    if (server && server.history === undefined) server.history = []
    const token = (await getSetting('token')) as Setting['token'] | null
    const admin_token = (await getSetting('admin_token')) as Setting['admin_token'] | null
    const locale = (await getSetting('locale')) as Setting['locale'] | null
    const theme = (await getSetting('theme')) as Setting['theme'] | null
    const mod = (await getSetting('mod')) as Setting['mod'] | null
    const proxy = (await getSetting('proxy')) as Setting['proxy'] | null
    const update = (await getSetting('update')) as Setting['update'] | null
    const launcher = (await getSetting('launcher')) as Setting['launcher'] | null
    const seed = (await getSetting('seed')) as Setting['seed'] | null
    const alwaysOnTop = (await getSetting('alwaysOnTop')) as Setting['alwaysOnTop'] | null

    const settingStore = useSettingStore()
    settingStore.initSettings({
      server,
      token,
      admin_token,
      locale,
      theme,
      mod,
      proxy,
      update,
      launcher,
      seed,
      alwaysOnTop
    })
  } catch {
    window.$message?.error('load settings failed')
  }
}

export async function loadWebSetting() {
  const server = (await getSetting('server')) as Setting['server'] | null
  if (server && server.history === undefined) server.history = []
  const token = (await getSetting('token')) as Setting['token'] | null
  const admin_token = (await getSetting('admin_token')) as Setting['admin_token'] | null
  const locale = window.localStorage.getItem('locale') as Setting['locale'] | null
  const theme = window.localStorage.getItem('theme') as Setting['theme'] | null

  const settingStore = useSettingStore()
  settingStore.initSettings({ server, token, admin_token, locale, theme })
}
