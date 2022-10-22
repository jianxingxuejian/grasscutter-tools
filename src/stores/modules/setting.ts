import { defineStore } from 'pinia'
import { setSetting } from '@/utils'

export const useSettingStore = defineStore('setting-store', {
  state: (): Setting => ({
    server: {
      protocol: 'https',
      ip: '127.0.0.1',
      username: '',
      history: []
    },
    token: '',
    admin_token: '',
    locale: 'zh-CN',
    theme: 'light',
    mod: {
      path: '',
      width: 9,
      height: 16,
      showName: true,
      showAuthor: true
    },
    proxy: {
      enable: false
    },
    update: {}
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
          if (value) {
            //@ts-ignore
            state[key] = value
          }
        }
      })
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
    async updateLocale(locale: Setting['locale']) {
      this.locale = locale
      await setSetting('locale', locale)
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
    async updateProxy(proxy: Setting['proxy']) {
      this.proxy = proxy
      await setSetting('proxy', this.proxy)
    },
    async updateCheckTime(lastCheckTime: number) {
      this.update.lastCheckTime = lastCheckTime
      await setSetting('update', this.update)
    }
  }
})
