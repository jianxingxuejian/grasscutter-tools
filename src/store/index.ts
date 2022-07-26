import type { App } from 'vue'
import { createPinia } from 'pinia'

/** 安装状态管理 */
export function setupStore(app: App) {
  const store = createPinia()
  app.use(store)
}

export * from './modules'
