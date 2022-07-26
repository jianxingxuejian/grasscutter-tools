const routes: Route.RecordRaw[] = [
  {
    path: '/',
    name: 'home',
    redirect: '/artifact',
    component: () => import('@/layout/index.vue')
  }
]

export default routes
