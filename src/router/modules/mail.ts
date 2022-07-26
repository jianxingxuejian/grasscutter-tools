const routes: Route.Config = {
  path: '/mail',
  name: 'mail',
  redirect: '/mail/index',
  component: () => import('@/layout/index.vue'),
  title: '邮件',
  icon: 'mdi:email-edit-outline',
  sort: 6,
  isRoot: true,
  children: [
    {
      path: 'index',
      name: 'mail_index',
      title: '关于',
      component: () => import('@/views/mail/index.vue')
    }
  ]
}

export default routes
