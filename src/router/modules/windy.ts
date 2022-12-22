const routes: Route.Config = {
  path: '/seed',
  name: 'seed',
  redirect: '/seed/index',
  component: () => import('@/layout/index.vue'),
  meta: {
    sort: 7,
    isRoot: true,
    icon: 'mdi:seed',
    hideInWeb: true
  },
  children: [
    {
      path: 'index',
      name: 'seed_index',
      component: () => import('@/views/seed/index.vue')
    }
  ]
}

export default routes
