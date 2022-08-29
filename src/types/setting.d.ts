interface Setting {
  server: Server
  token: string
  admin_token: string
  locale: 'zh-CN' | 'en-US'
  theme: 'light' | 'dark'
  mod_path: string
}

interface Server {
  protocol: 'http' | 'https'
  ip: string
  username: string
}

type LocaleModule = Record<string, { default: unknown }>
