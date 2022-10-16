const routes: Route.Config = {
  path: '/quest',
  name: 'quest',
  redirect: '/quest/index',
  component: () => import('@/layout/index.vue'),
  meta: {
    sort: 5,
    isRoot: true,
    icon: 'tabler:exclamation-mark'
  },
  children: [
    {
      path: 'index',
      name: 'quest_index',
      component: () => import('@/views/quest/index.vue')
    }
  ]
}

export default routes
