import { defineStore } from 'pinia'
import { setSettings } from '@/utils'

export const useSettingsStore = defineStore('settings-store', {
  state: () => ({} as Settings),
  getters: {
    getServer: state => `${state.server.protocol}://${state.server.ip}`
  },
  actions: {
    initSettings(settings: Settings) {
      this.server = settings.server
      this.token = settings.token
      this.admin_token = settings.admin_token
      this.locale = settings.locale
    },
    async updateServer() {
      await setSettings('server', this.server)
    },
    async updateToken(token: string) {
      this.token = token
      await setSettings('token', token)
    },
    async updateAdminToken(admin_token: string) {
      this.admin_token = admin_token
      await setSettings('admin_token', admin_token)
    },
    async updateLocale() {
      console.log(this.locale)
      await setSettings('locale', this.locale)
    }
  }
})
