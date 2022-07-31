import request from '@/http/request'

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
  return await request.get('/plugin/player/command', { command })
}
