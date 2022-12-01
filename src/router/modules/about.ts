const routes: Route.Config = {
  path: '/about',
  name: 'about',
  redirect: '/about/index',
  component: () => import('@/layout/index.vue'),
  meta: {
    sort: 8,
    isRoot: true,
    icon: 'ic:outline-info',
    hideInTauri: true
  },
  children: [
    {
      path: 'index',
      name: 'about_index',
      component: () => import('@/views/about/index.vue')
    }
  ]
}

export default routes
