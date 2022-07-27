import request from '@/http/request'

export async function adminAuth(params: Param.AdminAuth) {
  return await request.get<Result.Token>('/plugin/admin/auth', params)
}

export async function adminCreateAccount(params: Param.Account) {
  return await request.get<Result.Token>('/plugin/admin/createAccount', params)
}

export async function adminCommand(params: Param.Command) {
  return await request.get('/plugin/admin/command', params)
}

export async function mailVerifyCode(params: Param.MailVerifyCode) {
  return await request.get('/plugin/mail/verifyCode', params)
}

export async function playerAuthByVerifyCode(params: Param.VerifyCode) {
  return await request.get<Result.Token>('/plugin/player/authByVerifyCode', params)
}

export async function playerAuthByPassword(params: Param.Account) {
  return await request.get<Result.Token>('/plugin/player/authByPassword', params)
}

export async function playerCommand(params: Param.Command) {
  return await request.get('/plugin/player/command', params)
}
