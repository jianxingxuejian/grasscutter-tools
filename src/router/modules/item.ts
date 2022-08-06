import IconCustomThing from '~icons/custom/thing'

const routes: Route.Config = {
  path: '/item',
  name: 'item',
  redirect: '/item/index',
  component: () => import('@/layout/index.vue'),
  icon: IconCustomThing,
  sort: 3,
  isRoot: true,
  children: [
    {
      path: 'index',
      name: 'item_index',
      component: () => import('@/views/item/index.vue')
    }
  ]
}

export default routes
