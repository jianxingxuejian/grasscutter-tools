const routes: Route.Config = {
  path: '/about',
  name: 'about',
  redirect: '/about/index',
  component: () => import('@/layout/index.vue'),
  meta: {
    sort: 6,
    isRoot: true,
    icon: 'icon-park-outline:info'
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
