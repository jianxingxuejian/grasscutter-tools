const routes: Route.Config = {
  path: '/setting',
  name: 'setting',
  redirect: '/setting/index',
  component: () => import('@/layout/index.vue'),
  icon: 'ic:outline-settings',
  sort: 5,
  isRoot: true,
  children: [
    {
      path: 'index',
      name: 'setting_index',
      component: () => import('@/views/setting/index.vue')
    }
  ]
}

export default routes
