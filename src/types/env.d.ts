/// <reference types="vite/client" />

/** 环境配置 */
interface ImportMetaEnv {
  /** 项目基本地址 */
  readonly VITE_BASE_URL: string
  /** 项目名称 */
  readonly VITE_APP_NAME: string
  /** 端口 */
  readonly VITE_PROT?: number
  /** api标识 */
  readonly VITE_API_PREFIX?: string
  /** 代理标识 */
  readonly VITE_PROXY_PREFIX?: string
  /** 代理地址 */
  readonly VITE_PROXY_URL?: string
}
