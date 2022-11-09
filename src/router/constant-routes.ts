import isTauri from '@/utils/is-tauri'

const routes: Route.RecordRaw[] = [
  {
    path: '/',
    name: 'home',
    redirect: isTauri ? '/common' : '/artifact',
    component: () => import('@/layout/index.vue')
  }
]

export default routes
