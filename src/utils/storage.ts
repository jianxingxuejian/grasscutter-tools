import { Store } from 'tauri-plugin-store-api'
import { useSettingsStore } from '@/store'

const store = new Store('.settings')

export async function setSettings(key: string, value: any) {
  try {
    await store.set(key, value)
    await saveSettings()
    window.$message?.success('settings saved')
  } catch {
    window.$message?.error('set settings failed')
  }
}

export async function getSettings<T>(key: string) {
  try {
    return await store.get<T>(key)
  } catch {
    window.$message?.error('get settings failed')
  }
}

export async function saveSettings() {
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

export async function loadSettings() {
  try {
    await store.load()
    let server = (await getSettings('server')) as Settings['server'] | null
    if (!server) {
      server = {
        protocol: 'https',
        ip: '127.0.0.1',
        uid: ''
      }
      await setSettings('server', server)
    }

    let token = (await getSettings('token')) as string | null
    if (token === null) {
      token = ''
      await setSettings('token', token)
    }

    let adminToken = (await getSettings('adminToken')) as string | null
    if (adminToken === null) {
      adminToken = ''
      await setSettings('adminToken', adminToken)
    }

    let locale = (await getSettings('locale')) as Settings['locale'] | null
    if (!locale) {
      locale = 'zh-CN'
      await setSettings('locale', locale)
    }

    const settingsStore = useSettingsStore()
    settingsStore.initSettings({ server, token, adminToken, locale })
  } catch {
    window.$message?.error('load settings failed')
  }
}
