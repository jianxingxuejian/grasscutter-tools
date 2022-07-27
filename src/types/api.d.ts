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
  interface AdminAuth {
    adminVoucher: string
  }
  interface Command {
    command: string
  }
  interface MailVerifyCode {
    username: string
  }
  interface VerifyCode {
    username: string
    verifyCode: string
  }
  interface Account {
    username: string
    password: string
  }
}

declare namespace Result {
  interface Token {
    token: string
  }
}
