import { defineStore } from 'pinia'
import { setSetting } from '@/utils'

export const useSettingStore = defineStore('setting-store', {
  state: (): Setting => ({
    server: {
      protocol: 'https',
      ip: '127.0.0.1',
      username: ''
    },
    token: '',
    admin_token: '',
    locale: 'zh-CN',
    theme: 'light',
    mod_path: ''
  }),
  getters: {
    getServer: state => `${state.server.protocol}://${state.server.ip}`,
    getModPath: state => {
      if (state.mod_path) {
        const path = state.mod_path.replace(/\\/g, '/')
        return path.substring(0, path.lastIndexOf('/') + 1) + '/Mods/'
      }
    }
  },
  actions: {
    initSettings(settings: NullablePartial<Setting>) {
      this.$patch(state => {
        Object.assign(state, settings)
      })
    },
    async updateServer() {
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
    async updateModPath(modPath: string) {
      this.mod_path = modPath
      await setSetting('mod_path', this.mod_path)
    }
  }
})
