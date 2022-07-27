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
      this.locale = settings.locale
    },
    async updateServer() {
      await setSettings('server', this.server)
    },
    async updateToken(token: string) {
      this.token = token
      await setSettings('token', token)
    },
    async updateLocale() {
      console.log(this.locale)
      await setSettings('locale', this.locale)
    }
  }
})
