import type { App } from 'vue'
import { createI18n } from 'vue-i18n'

const module = import.meta.glob('./locales/*/index.ts', { eager: true }) as LocaleModule
const messages: Record<string, any> = {}
Object.keys(module).forEach(key => {
  const locale = key.split('locales/').pop()?.replace('/index.ts', '') as string
  messages[locale] = module[key].default
})

const i18n = createI18n({
  legacy: false,
  // globalInjection: true,
  messages
})

/** 安装国际化 */
export function setupI18n(app: App) {
  app.use(i18n)
}

export default i18n
