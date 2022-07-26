import type { VNode } from 'vue'
import { NIcon } from 'naive-ui'
import { Icon } from '@iconify/vue'

/** 路由模块转换为路由记录 */
export function transformModeleToRoute(module: Route.Module): Route.RecordRaw[] {
  const configs: Route.Config[] = []
  Object.values(module).forEach(item => {
    if (item.default) {
      configs.push(item.default)
    }
  })
  return transformConfigToRoute(configs)
}

/** 路由配置转换为路由记录 */
function transformConfigToRoute(configs: Route.Config[]): Route.RecordRaw[] {
  const routes: Route.RecordRaw[] = []
  configs.sort((next, pre) => Number(next?.sort) - Number(pre?.sort))
  configs.forEach(item => {
    const { name, path, redirect, component, title, icon, isRoot, children } = item
    const route: Route.RecordRaw = {
      name,
      path,
      redirect,
      component,
      meta: { title, icon: transformIcon(icon), isRoot },
      children: children && transformConfigToRoute(children)
    }
    routes.push(route)
  })
  return routes
}

/** 路由转换为菜单 */
export function transformRouteToMenu(routes: Route.RecordRaw[], parentPath?: string): Route.Menu[] {
  const menus: Route.Menu[] = []
  routes.forEach(route => {
    /** 当子路由仅有一个时，以该子路由作为菜单 */
    if (route.meta?.isRoot && route.children && route.children.length == 1) {
      const child = route.children[0]
      const menu: Route.Menu = {
        key: child.name,
        label: route.meta?.title || child.meta?.title || '',
        path: route.path + '/' + child.path,
        icon: route.meta?.icon || child.meta?.icon
      }
      menus.push(menu)
    } else {
      const menu: Route.Menu = {
        key: route.name,
        label: route.meta?.title || '',
        path: parentPath ? parentPath + '/' + route.path : route.path,
        icon: route.meta?.icon,
        children: route.children && transformRouteToMenu(route.children, route.path)
      }
      menus.push(menu)
    }
  })
  return menus
}

/** 转换图标 */
function transformIcon(icon?: Route.Config['icon'], size?: number | string, color?: string): undefined | (() => VNode) {
  if (!icon) {
    return undefined
  }

  const style: { color?: string; size?: string } = {}
  if (size) {
    if (typeof size === 'string') {
      style.size = size
    }
    if (typeof size === 'number') {
      style.size = `${size}px`
    }
  }
  if (color) {
    style.color = color
  }

  if (typeof icon === 'string') {
    return () => h(NIcon, null, { default: () => h(Icon, { icon, style }) })
  }

  return () => h(NIcon, style, { default: () => h(icon) })
}
