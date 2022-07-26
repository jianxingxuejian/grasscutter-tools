import { defineStore } from 'pinia'

/** app状态 */
interface AppState {
  /** 基准字体大小 */
  fontSize: number
  /** 菜单 */
  menus: Route.Menu[]
}

export const useAppStore = defineStore('app-store', {
  state: (): AppState => ({
    fontSize: 14,
    menus: []
  }),
  actions: {
    /** 更改基准字体大小 */
    updateFontSize(fontSize: number) {
      this.fontSize = fontSize
    },
    /** 初始化菜单 */
    initMenu(menus: Route.Menu[]) {
      this.menus = menus
    }
  }
})
