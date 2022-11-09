const routes: Route.Config = {
  path: '/launcher',
  name: 'launcher',
  redirect: '/launcher/index',
  component: () => import('@/layout/index.vue'),
  meta: {
    sort: 1,
    isRoot: true,
    icon: 'material-symbols:rocket-launch-outline-rounded',
    hideInWeb: true
  },
  children: [
    {
      path: 'index',
      name: 'launcher_index',
      component: () => import('@/views/launcher/index.vue')
    }
  ]
}

export default routes
