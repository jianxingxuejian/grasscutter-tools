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
function transformConfigToRoute(configs: Route.Config[] | Optional<Route.Config, 'meta'>[]): Route.RecordRaw[] {
  const routes: Route.RecordRaw[] = []
  configs.sort((next, pre) => Number(next?.meta?.sort) - Number(pre?.meta?.sort))
  configs.forEach(item => {
    const { meta, children, ...base } = item
    const { icon, ...other } = meta || {}
    const route: Route.RecordRaw = {
      ...base,
      meta: {
        icon: transformIcon(icon),
        ...other
      },
      children: children && transformConfigToRoute(children)
    }
    routes.push(route)
  })
  return routes
}

/** 转换图标 */
function transformIcon(
  icon?: Route.Config['meta']['icon'],
  size?: number | string,
  color?: string
): undefined | (() => VNode) {
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
