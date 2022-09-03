import IconCustomThing from '~icons/custom/thing'

const routes: Route.Config = {
  path: '/item',
  name: 'item',
  redirect: '/item/index',
  component: () => import('@/layout/index.vue'),
  meta: {
    sort: 3,
    isRoot: true,
    icon: IconCustomThing
  },
  children: [
    {
      path: 'index',
      name: 'item_index',
      component: () => import('@/views/item/index.vue')
    }
  ]
}

export default routes
