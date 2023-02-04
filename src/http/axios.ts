import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios'
import { useSettingStore } from '@/stores'
import { showErrorMsg } from '@/utils'
import i18n from '@/i18n'

class CustomAxiosInstance {
  instance: AxiosInstance

  constructor(axiosConfig: AxiosRequestConfig) {
    this.instance = axios.create(axiosConfig)
    this.setInterceptor()
  }

  setInterceptor() {
    const settingStore = useSettingStore()

    // intercept request
    this.instance.interceptors.request.use(
      config => {
        const { getServer, locale, token, admin_token } = settingStore
        config.baseURL = getServer
        config.headers.locale = locale
        config.headers.token = token
        config.headers.admin_token = admin_token
        return config
      },
      // @ts-ignore
      () => showErrorMsg(100, i18n.global.t('network error'))
    )

    // intercept response
    this.instance.interceptors.response.use(
      response => {
        const { status, data } = response
        if (status !== 200) {
          showErrorMsg(100, i18n.global.t('network error'))
          return data
        }

        if (data.code !== 200) {
          showErrorMsg(100, i18n.global.t('network error'))
          return data
        }

        return data
      },
      () => showErrorMsg(100, i18n.global.t('network error'))
    )
  }
}

function createRequest(axiosConfig: AxiosRequestConfig) {
  const instance = new CustomAxiosInstance(axiosConfig).instance

  async function get<T = any>(url: string, config?: AxiosRequestConfig) {
    try {
      return (await instance.get(url, config)) as ApiResult<T>
    } catch {
      return
    }
  }

  async function post<T = any>(url: string, data?: any, config?: AxiosRequestConfig) {
    try {
      return (await instance.post(url, data, config)) as ApiResult<T>
    } catch {
      return
    }
  }

  return {
    get,
    post
  }
}

const axiosRequest = createRequest({})

export default axiosRequest
