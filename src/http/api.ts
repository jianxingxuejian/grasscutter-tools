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

export async function mailVerifyCode(uid: string) {
  return await request.get('/plugin/mail/verifyCode', { uid })
}

export async function playerAuthByVerifyCode(uid: string, verifyCode: string) {
  return await request.get<string>('/plugin/player/authByVerifyCode', { uid, verifyCode })
}

export async function playerAuthByPassword(uid: string, password: string) {
  return await request.get<string>('/plugin/player/authByPassword', { uid, password })
}

export async function playerCommand(command: string) {
  return await request.get('/plugin/player/command', { command })
}
