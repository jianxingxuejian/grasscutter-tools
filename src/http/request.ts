import { invoke } from '@tauri-apps/api/tauri'
import { useSettingStore } from '@/stores'
import { showErrorMsg } from '@/utils'
import i18n from '@/i18n'

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS'

function request() {
  const settingStore = useSettingStore()

  async function get<T = null>(api: string, params?: any) {
    return await request<T>('GET', api, params)
  }
  async function post<T = null>(api: string, params?: any) {
    return await request<T>('POST', api, params)
  }

  async function request<T>(method: Method, api: string, params?: any) {
    console.log('test')
    try {
      const { getServer, locale, token, admin_token } = settingStore
      const headers = {
        locale,
        token,
        admin_token
      }
      const text = await invoke<string>('http', { method, url: getServer + api, params, headers })
      if (text) {
        const result: ApiResult<T> = JSON.parse(text)
        const { code, msg } = result
        if (code != 200) {
          showErrorMsg(code, msg)
        }
        return result
      }
    } catch (e) {
      const message = i18n.global.locale.value === 'zh-CN' ? '网络错误' : 'Network error'
      showErrorMsg(100, message)
    }
  }

  return {
    get,
    post
  }
}

export default request()
