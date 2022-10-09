import IconCustomArtifact from '~icons/custom/artifact'

const routes: Route.Config = {
  path: '/artifact',
  name: 'artifact',
  redirect: '/artifact/index',
  component: () => import('@/layout/index.vue'),
  meta: {
    sort: 3,
    isRoot: true,
    icon: IconCustomArtifact
  },
  children: [
    {
      path: 'index',
      name: 'artifact_index',
      component: () => import('@/views/artifact/index.vue')
    }
  ]
}

export default routes
