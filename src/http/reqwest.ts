import { invoke } from '@tauri-apps/api/tauri'
import { useSettingStore } from '@/stores'
import { showErrorMsg } from '@/utils'
import i18n from '@/i18n'

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS'

export default async function reqwest<T>(method: Method, api: string, params?: any) {
  try {
    const { getServer, locale, token, admin_token, proxy } = useSettingStore()
    const headers = { locale, token, admin_token }
    const text = await invoke<string>('http', { method, url: getServer + api, params, headers, proxy })
    if (text) {
      const result: ApiResult<T> = JSON.parse(text)
      const { code, msg } = result
      if (code != 200) {
        showErrorMsg(code, msg)
      }
      return result
    }
  } catch (e) {
    //@ts-ignore
    showErrorMsg(100, i18n.global.t('network error'))
  }
}
