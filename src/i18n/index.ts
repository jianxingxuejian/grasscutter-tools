import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
import { useSettingsStore } from '@/store'

// import messages from '@intlify/unplugin-vue-i18n/messages'

/** 安装国际化 */
export function setupI18n(app: App) {
  const { locale } = useSettingsStore()
  const i18n = createI18n({
    legacy: false,
    locale
    // globalInjection: true,
    // messages
  })
  app.use(i18n)
}
