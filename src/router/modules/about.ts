const routes: Route.Config = {
  path: '/about',
  name: 'about',
  redirect: '/about/index',
  component: () => import('@/layout/index.vue'),
  title: '关于',
  icon: 'icon-park-outline:info',
  sort: 7,
  isRoot: true,
  children: [
    {
      path: 'index',
      name: 'about_index',
      title: '关于',
      component: () => import('@/views/about/index.vue')
    }
  ]
}

export default routes
