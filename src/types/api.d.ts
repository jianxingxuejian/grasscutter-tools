/** 请求结果 */
interface ApiResult<T> {
  /** 状态码 */
  code: number
  /** 接口消息 */
  msg: string
  /** 接口数据 */
  data: T
}

declare namespace Param {
  interface Account {
    username: string
    password: string
  }
}

interface Props {
  inGodMode: boolean
  unLimitedStamina: boolean
  unLimitedEnergy: boolean
  worldLevel: number
  bpLevel: number
  towerLevel: number
  playerLevel: number
}
