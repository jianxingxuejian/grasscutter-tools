import IconCustomThing from '~icons/custom/thing'

const routes: Route.Config = {
  path: '/thing',
  name: 'thing',
  redirect: '/thing/index',
  component: () => import('@/layout/index.vue'),
  title: '物品',
  icon: IconCustomThing,
  sort: 4,
  isRoot: true,
  children: [
    {
      path: 'index',
      name: 'thing_index',
      component: () => import('@/views/thing/index.vue')
    }
  ]
}

export default routes
