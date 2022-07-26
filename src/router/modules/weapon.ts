import IconCustomWeapon from '~icons/custom/weapon'

const routes: Route.Config = {
  path: '/weapon',
  name: 'weapon',
  redirect: '/weapon/index',
  component: () => import('@/layout/index.vue'),
  title: '武器',
  icon: IconCustomWeapon,
  sort: 2,
  isRoot: true,
  children: [
    {
      path: 'index',
      name: 'weapon_index',
      component: () => import('@/views/weapon/index.vue')
    }
  ]
}

export default routes
