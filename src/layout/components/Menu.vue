<template>
  <n-menu class="select-none" mode="horizontal" :value="activeKey" :options="menus" @update:value="handleUpdateMenu" />
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import type { MenuOption } from 'naive-ui/es/menu/src/interface'
  import modules from '@/router/modules'

  const { tm } = useI18n()

  const menus = computed(() => transformRouteToMenu(modules))

  /** 路由转换为菜单 */
  function transformRouteToMenu(routes: Route.RecordRaw[], parentPath?: string): Route.Menu[] {
    const menus: Route.Menu[] = []
    routes.forEach(route => {
      const { name } = route
      const routeMessage: Message['route'] = tm('route')
      const label = routeMessage[name]
      /** 当子路由仅有一个时，以该子路由作为菜单 */
      if (route.meta?.isRoot && route.children && route.children.length == 1) {
        const child = route.children[0]
        const menu: Route.Menu = {
          key: child.name,
          label,
          path: route.path + '/' + child.path,
          icon: route.meta?.icon || child.meta?.icon
        }
        menus.push(menu)
      } else {
        const menu: Route.Menu = {
          key: route.name,
          label,
          path: parentPath ? parentPath + '/' + route.path : route.path,
          icon: route.meta?.icon,
          children: route.children && transformRouteToMenu(route.children, route.path)
        }
        menus.push(menu)
      }
    })
    return menus
  }

  const router = useRouter()
  const route = useRoute()

  // 根据路由找到当前菜单项
  const activeKey = computed(() => {
    return route.name as string
  })

  function handleUpdateMenu(_key: string, item: MenuOption) {
    router.push(item.path as string)
  }
</script>
