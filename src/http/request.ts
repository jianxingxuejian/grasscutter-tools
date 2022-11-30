import axiosRequest from './axios'
import reqwest from './reqwest'
import isTauri from '@/utils/is-tauri'

function request() {
  function get<T = null>(api: string) {
    if (isTauri) {
      return reqwest<T>('GET', api)
    } else {
      return axiosRequest.get<T>(api)
    }
  }
  function post<T = null>(api: string, params?: any) {
    if (isTauri) {
      return reqwest<T>('POST', api, params)
    } else {
      return axiosRequest.post<T>(api, params)
    }
  }

  return {
    get,
    post
  }
}

export default request()
