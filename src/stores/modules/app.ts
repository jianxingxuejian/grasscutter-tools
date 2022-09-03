import { defineStore } from 'pinia'

/** app状态 */
interface AppState {
  /** 基准字体大小 */
  fontSize: number
}

export const useAppStore = defineStore('app-store', {
  state: (): AppState => ({
    fontSize: 14
  }),
  actions: {
    /** 更改基准字体大小 */
    updateFontSize(fontSize: number) {
      this.fontSize = fontSize
    }
  }
})
