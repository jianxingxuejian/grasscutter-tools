interface Setting {
  server: {
    protocol: 'http' | 'https'
    ip: string
    username: string
    history: string[]
  }
  token: string
  admin_token: string
  locale: 'zh-CN' | 'en-US' | 'ja-JP' | 'es'
  theme: 'light' | 'dark'
  mod: {
    path: string
    width: number
    height: number
    showName: boolean
    showAuthor: boolean
    nsfw: boolean
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
