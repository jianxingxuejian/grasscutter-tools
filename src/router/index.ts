import type { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import modules from './modules'
import constantRoutes from './constant-routes'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_BASE_URL),
  routes: [...constantRoutes, ...modules] as RouteRecordRaw[]
})

/** 安装路由 */
export async function setupRouter(app: App) {
  app.use(router)
  await router.isReady()
}

export default router
