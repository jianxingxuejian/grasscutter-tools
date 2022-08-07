import { invoke } from '@tauri-apps/api/tauri'
import { useSettingsStore } from '@/store'
import { showErrorMsg } from '@/utils'
import i18n from '@/i18n'

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS'

function request() {
  const settingsStore = useSettingsStore()

  async function get<T = null>(api: string, params?: any) {
    return await http<T>('GET', api, params)
  }
  async function post<T = null>(api: string, params?: any) {
    return await http<T>('POST', api, params)
  }

  async function http<T>(method: Method, api: string, params?: any) {
    try {
      const { getServer, locale, token, admin_token } = settingsStore
      const headers = {
        locale,
        token,
        admin_token
      }
      console.log(getServer + api)
      console.log(params)
      console.log(headers)
      const text = await invoke<string>('http', { method, url: getServer + api, params, headers })
      if (text) {
        console.log(text)
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
