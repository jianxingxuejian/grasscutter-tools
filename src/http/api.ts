import request from '@/http/request'
import { useSettingsStore } from '@/store'
import router from '@/router'
import i18n from '@/i18n'

export async function adminAuth(adminVoucher: string) {
  return await request.get<string>('/plugin/admin/auth', { adminVoucher })
}

export async function adminCreateAccount(params: Param.Account) {
  return await request.get('/plugin/admin/createAccount', params)
}

export async function adminCommand(command: string) {
  return await request.get('/plugin/admin/command', { command })
}

export async function mailVerifyCode(username: string) {
  return await request.get('/plugin/mail/verifyCode', { username })
}

export async function playerAuthByVerifyCode(username: string, verifyCode: string) {
  return await request.get<string>('/plugin/player/authByVerifyCode', { username, verifyCode })
}

export async function playerAuthByPassword(username: string, password: string) {
  return await request.get<string>('/plugin/player/authByPassword', { username, password })
}

export async function playerCommand(command: string) {
  if (!useSettingsStore().token) {
    const message = i18n.global.locale.value === 'zh-CN' ? '请先进行玩家验证' : 'Please auth player first'
    window.$message?.error(message)
    router.push('/setting/index')
    return
  }
  return await request.get('/plugin/player/command', { command })
}
