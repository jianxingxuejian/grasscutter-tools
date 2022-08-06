const routes: Route.Config = {
  path: '/common',
  name: 'common',
  redirect: '/common/index',
  component: () => import('@/layout/index.vue'),
  icon: 'material-symbols:dashboard-customize-outline',
  sort: 1,
  isRoot: true,
  children: [
    {
      path: 'index',
      name: 'common_index',
      component: () => import('@/views/common/index.vue')
    }
  ]
}

export default routes
