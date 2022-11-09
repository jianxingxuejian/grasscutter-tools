const routes: Route.Config = {
  path: '/common',
  name: 'common',
  redirect: '/common/index',
  component: () => import('@/layout/index.vue'),
  meta: {
    sort: 2,
    isRoot: true,
    icon: 'material-symbols:dashboard-customize-outline',
    hideInWeb: true
  },
  children: [
    {
      path: 'index',
      name: 'common_index',
      component: () => import('@/views/common/index.vue')
    }
  ]
}

export default routes
