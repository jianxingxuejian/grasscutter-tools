import request from '@/http/request'

export async function adminAuth(params: Param.AdminAuth) {
  return await request.get('/plugin/admin/auth', params)
}

export async function adminCommand(params: Param.AdminCommand) {
  return await request.get('/plugin/admin/command', params)
}

export async function mailVerifyCode(params: Param.MailVerifyCode) {
  return await request.get('/plugin/mail/verifyCode', params)
}

export async function playerAuth(params: Param.PlayerAuth) {
  return await request.get('/plugin/player/auth', params)
}

export async function playerCommand(params: Param.PlayerCommand) {
  return await request.get('/plugin/player/command', params)
}
