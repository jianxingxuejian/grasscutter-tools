import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
import messages from '@intlify/unplugin-vue-i18n/messages'

const datas = import.meta.glob('./data/*/index.ts', { eager: true }) as LocaleModule
Object.keys(datas).forEach(key => {
  const locale = key.split('data/').pop()?.replace('/index.ts', '') as string
  messages[locale].data = datas[key].default
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
