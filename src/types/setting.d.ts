interface Settings {
  server: Server
  token: string
  admin_token: string
  locale: 'zh-CN' | 'en-US'
  theme: 'light' | 'dark'
}

interface Server {
  protocol: 'http' | 'https'
  ip: string
  username: string
}

type LocaleModule = Record<string, { default: unknown }>
