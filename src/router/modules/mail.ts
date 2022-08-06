const routes: Route.Config = {
  path: '/mail',
  name: 'mail',
  redirect: '/mail/index',
  component: () => import('@/layout/index.vue'),
  icon: 'mdi:email-edit-outline',
  sort: 4,
  isRoot: true,
  children: [
    {
      path: 'index',
      name: 'mail_index',
      component: () => import('@/views/mail/index.vue')
    }
  ]
}

export default routes
