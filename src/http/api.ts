import request from '@/http/request'
import { useSettingStore } from '@/stores'
import router from '@/router'
import i18n from '@/i18n'

export function adminAuth(adminVoucher: string) {
  return request.get<string>(`/plugin/admin/auth?adminVoucher=${adminVoucher}`)
}

export function adminCreateAccount(params: Param.Account) {
  return request.get('/plugin/admin/createAccount', params)
}

export function adminCommand(command: string) {
  return request.get(`/plugin/admin/command?command=${command}`)
}

export function mailVerifyCode(username: string) {
  return request.get(`/plugin/mail/verifyCode?username=${username}`)
}

export function playerAuthByVerifyCode(username: string, verifyCode: string) {
  return request.get<string>('/plugin/player/authByVerifyCode', { username, verifyCode })
}

export function playerAuthByPassword(username: string, password: string) {
  return request.get<string>('/plugin/player/authByPassword', { username, password })
}

export function playerCommand(command: string) {
  if (!checkToken()) return
  return request.get(`/plugin/player/command?command=${command}`)
}

export function levelUpAllSkill() {
  if (!checkToken()) return
  return request.get('/plugin/player/levelUpAllSkill')
}

export function getProps() {
  return request.get<Props>('/plugin/player/getProps')
}

export function cdr() {
  if (!checkToken()) return
  return request.get('/plugin/player/cdr')
}

function checkToken() {
  if (!useSettingStore().token) {
    const message = i18n.global.locale.value === 'zh-CN' ? '请先进行玩家验证' : 'Please auth player first'
    window.$message?.error(message)
    router.push('/setting/index')
    return false
  }
  return true
}
