interface Settings {
  server: Server
  token: string
  admin_token: string
  locale: 'zh-CN' | 'en-US'
}

interface Server {
  protocol: 'http' | 'https'
  ip: string
  username: string
}
