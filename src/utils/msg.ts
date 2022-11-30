/** 错误消息栈 */
const errorMsgStack = new Map<number, string>()

/** 错误提示持续时间 */
const ERROR_MSG_DURATION = 2000

/**
 * 显示错误信息
 * @param code 错误码
 * @param msg 错误信息
 */
export function showErrorMsg(code: number, msg: string): void {
  if (errorMsgStack.has(code)) return

  errorMsgStack.set(code, msg)
  window.$message?.error(msg, { duration: ERROR_MSG_DURATION })
  setTimeout(() => {
    errorMsgStack.delete(code)
  }, ERROR_MSG_DURATION)
}

export function showSuccessMsg(result: ApiResult<any> | undefined | null | void): void
export function showSuccessMsg(code?: number, msg?: string): void
export function showSuccessMsg(resultOrCode?: ApiResult<any> | undefined | null | void | number, msg?: string): void {
  if (!resultOrCode) return
  if (typeof resultOrCode === 'object') {
    const { code, msg } = resultOrCode
    if (code === 200) {
      window.$message?.success(msg)
    }
  } else if (resultOrCode === 200 && msg) {
    window.$message?.success(msg)
  }
}
