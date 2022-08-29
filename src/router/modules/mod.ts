const routes: Route.Config = {
  path: '/mod',
  name: 'mod',
  redirect: '/mod/index',
  component: () => import('@/layout/index.vue'),
  icon: 'mdi:account-edit-outline',
  sort: 4,
  isRoot: true,
  children: [
    {
      path: 'index',
      name: 'mod_index',
      component: () => import('@/views/mod/index.vue')
    }
  ]
}

export default routes
