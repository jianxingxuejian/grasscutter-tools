const routes: Route.RecordRaw[] = [
  {
    path: '/',
    name: 'home',
    redirect: '/common',
    component: () => import('@/layout/index.vue')
  }
]

export default routes
