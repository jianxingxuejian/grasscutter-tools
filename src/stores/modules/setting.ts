import { defineStore } from 'pinia'
import { appWindow } from '@tauri-apps/api/window'
import { setSetting } from '@/utils'

export const useSettingStore = defineStore('setting-store', {
  state: (): Setting => ({
    server: {
      protocol: 'http',
      ip: '127.0.0.1:443',
      username: '',
      history: []
    },
    token: '',
    admin_token: '',
    locale: 'en',
    theme: 'light',
    alwaysOnTop: false,
    mod: {
      path: '',
      width: 9,
      height: 16,
      showName: true,
      showAuthor: true,
      nsfw: true
    },
    proxy: {
      enable: false
    },
    update: {},
    launcher: {
      gamePath: '',
      akebiPath: '',
      GCPath: '',
      gameStart: true,
      modStart: true,
      akebiStart: true,
      GCStart: true,
      popup: false,
      fullscreen: true,
      height: '800',
      width: '1600',
      customResolution: false
    },
    seed: {
      luacPath: ''
    }
  }),
  getters: {
    getServer: state => `${state.server.protocol}://${state.server.ip}`,
    getModPath: state => {
      if (state.mod.path) {
        const path = state.mod.path.replace(/\\/g, '/')
        return path.slice(0, path.lastIndexOf('/') + 1) + 'Mods/'
      }
    }
  },
  actions: {
    initSettings(settings: NullablePartial<Setting>) {
      this.$patch(state => {
        let key: keyof Setting
        for (key in settings) {
          const value = settings[key]
          if (!value) continue

          if (typeof value === 'object') {
            for (const childKey in value) {
              //@ts-ignore
              const childValue = value[childKey]
              if (childValue === undefined) continue
              //@ts-ignore
              state[key][childKey] = childValue
            }
          } else {
            //@ts-ignore
            state[key] = value
          }
        }
      })

      appWindow.setAlwaysOnTop(this.alwaysOnTop)
    },
    async updateServer() {
      const history = this.server.history
      const ip = this.server.ip

      if (!history.includes(ip)) {
        history.unshift(ip)
        if (history.length > 10) {
          history.length = 10
        }
      } else if (history[0] != ip) {
        this.server.history = [ip].concat(history.filter(item => item != ip))
      }

      await setSetting('server', this.server)
    },
    async updateToken(token: string) {
      this.token = token
      await setSetting('token', token)
    },
    async updateAdminToken(admin_token: string) {
      this.admin_token = admin_token
      await setSetting('admin_token', admin_token)
    },
    async updateLocale() {
      await setSetting('locale', this.locale)
    },
    async updateTheme() {
      if (this.theme === 'light') {
        this.theme = 'dark'
        await setSetting('theme', 'dark')
      } else {
        this.theme = 'light'
        await setSetting('theme', 'light')
      }
    },
    async updateModPath(path?: string) {
      if (path) {
        this.mod.path = path
      }
      await setSetting('mod', this.mod)
    },
    async updateProxy() {
      await setSetting('proxy', this.proxy)
    },
    async updateCheckTime(lastCheckTime: number) {
      this.update.lastCheckTime = lastCheckTime
      await setSetting('update', this.update)
    },
    async updateGamePath(path?: string) {
      if (!path) return
      this.launcher.gamePath = path
      await setSetting('launcher', this.launcher)
    },
    async updateAkebiPath(path?: string) {
      if (!path) return
      this.launcher.akebiPath = path
      await setSetting('launcher', this.launcher)
    },
    async updateLauncher() {
      await setSetting('launcher', this.launcher)
    },
    async updateGCPath(path?: string) {
      if (!path) return
      this.launcher.GCPath = path
      await setSetting('launcher', this.launcher)
    },
    async updateLuacPath(path: string) {
      this.seed.luacPath = path
      await setSetting('seed', this.seed)
    },
    async updateAlwaysOnTop() {
      appWindow.setAlwaysOnTop(this.alwaysOnTop)
      await setSetting('alwaysOnTop', this.alwaysOnTop)
    }
  }
})
