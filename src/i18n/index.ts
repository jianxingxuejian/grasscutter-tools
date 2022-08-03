import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
import { useSettingsStore } from '@/store'

const module = import.meta.glob('./locales/*.ts', { eager: true }) as LocaleModule
const messages: Record<string, any> = {}
Object.keys(module).forEach(key => {
  const locale = key.split('/').pop()?.replace('.ts', '') as string
  messages[locale] = module[key].default
})

console.log(messages)

/** 安装国际化 */
export function setupI18n(app: App) {
  const { locale } = useSettingsStore()
  const i18n = createI18n({
    legacy: false,
    locale,
    // globalInjection: true,
    messages
  })
  app.use(i18n)
}
