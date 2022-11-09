/// <reference types="vite/client" />

/** 环境配置 */
interface ImportMetaEnv {
  /** 项目基本地址 */
  readonly VITE_BASE_URL: string
  /** 项目名称 */
  readonly VITE_APP_NAME: string
  /** 是否开启打包压缩 */
  readonly VITE_COMPRESS: 'true' | 'false'
}
