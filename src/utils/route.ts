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
    const { name, path, redirect, component, icon, isRoot, children } = item
    const route: Route.RecordRaw = {
      name,
      path,
      redirect,
      component,
      meta: { icon: transformIcon(icon), isRoot },
      children: children && transformConfigToRoute(children)
    }
    routes.push(route)
  })
  return routes
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
