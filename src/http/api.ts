import request from '@/http/request'
import { useSettingStore } from '@/stores'
import router from '@/router'
import i18n from '@/i18n'
import isTauri from '@/utils/is-tauri'

export function adminAuth(adminVoucher: string) {
  return request.post<string>('/plugin/admin/auth', { adminVoucher })
}

export function adminCreateAccount(params: Param.Account) {
  return request.post('/plugin/admin/createAccount', params)
}

export function adminCommand(command: string) {
  return request.get(`/plugin/admin/command?command=${command}`)
}

export function mailVerifyCode(username: string) {
  return request.get(`/plugin/mail/verifyCode?username=${username}`)
}

export function playerAuthByVerifyCode(username: string, verifyCode: string) {
  return request.post<string>('/plugin/player/authByVerifyCode', { username, verifyCode })
}

export function playerAuthByPassword(username: string, password: string) {
  return request.post<string>('/plugin/player/authByPassword', { username, password })
}

export function playerCommand(command: string) {
  if (!checkToken()) return
  return request.get(`/plugin/player/command?command=${command}`)
}

export function levelUpAll(type: number) {
  if (!checkToken()) return
  return request.get(`/plugin/player/levelUpAll?type=${type}`)
}

export function getProps() {
  return request.get<Props>('/plugin/player/getProps')
}

export function cdr() {
  if (!checkToken()) return
  return request.get('/plugin/player/cdr')
}

export function seed(contents: string) {
  return request.post('/plugin/admin/seed', { contents })
}

function checkToken() {
  if (isTauri && !useSettingStore().token) {
    window.$message?.error(i18n.global.t('player auth first'))
    router.push('/setting/index')
    return false
  }
  return true
}
