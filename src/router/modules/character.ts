import IconCustomCharacter from '~icons/custom/character'

const routes: Route.Config = {
  path: '/character',
  name: 'character',
  redirect: '/character/index',
  component: () => import('@/layout/index.vue'),
  title: '人物',
  icon: IconCustomCharacter,
  sort: 1,
  isRoot: true,
  children: [
    {
      path: 'index',
      name: 'character_index',
      component: () => import('@/views/character/index.vue')
    }
  ]
}

export default routes
