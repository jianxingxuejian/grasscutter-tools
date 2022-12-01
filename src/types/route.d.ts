/** 路由模块 */
declare namespace Route {
  /** 基本配置 */
  interface Base {
    /** 路由名称 */
    name: string
    /** 路由路径 */
    path: string
    /** 重定向 */
    redirect?: string
    /** 路由组件 */
    component: import('vue').Component
  }

  /** 路由配置 */
  interface Config extends Base {
    /** 路由元信息 */
    meta: Meta & {
      /** 图标 */
      icon?: string | import('vue').FunctionalComponent
    }
    /** 子路由配置 */
    children?: Optional<Config, 'meta'>[]
  }

  type Module = Record<string, { default: Config | undefined }>

  /** 路由记录 */
  interface RecordRaw extends Base {
    /** 路由元信息 */
    meta?: Meta & {
      /** 图标 */
      icon?: () => import('vue').VNodeChild
    }
    /** 子路由 */
    children?: RecordRaw[]
  }

  /** 路由元数据 */
  interface Meta {
    /** 排序 */
    sort?: number
    /** 是否为根节点 */
    isRoot?: boolean
    /** 是否在web上隐藏 */
    hideInWeb?: boolean
    /** 是否在tauri上隐藏 */
    hideInTauri?: boolean
  }

  /** 菜单 */
  type Menu = {
    key: string
    label: string
    icon?: () => import('vue').VNodeChild
    children?: Menu[]
  }
}
