interface Setting {
  server: {
    protocol: 'http' | 'https'
    ip: string
    username: string
  }
  token: string
  admin_token: string
  locale: 'zh-CN' | 'en-US'
  theme: 'light' | 'dark'
  mod: {
    path: string
    width: number
    height: number
    showName: boolean
    showAuthor: boolean
  }
  proxy: {
    enable: boolean
    port?: number
  }
  update: {
    lastCheckTime?: number
  }
}

type LocaleModule = Record<string, { default: unknown }>
