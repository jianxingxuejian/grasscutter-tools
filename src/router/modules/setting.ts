const routes: Route.Config = {
  path: '/setting',
  name: 'setting',
  redirect: '/setting/index',
  component: () => import('@/layout/index.vue'),
  meta: {
    sort: 7,
    isRoot: true,
    icon: 'ic:outline-settings'
  },
  children: [
    {
      path: 'index',
      name: 'setting_index',
      component: () => import('@/views/setting/index.vue')
    }
  ]
}

export default routes
