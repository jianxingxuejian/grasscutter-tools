interface Settings {
  server: Server
  token: string | null
  locale: 'zh-CN' | 'en-US'
}

interface Server {
  protocol: 'http' | 'https'
  ip: string
  username: string
}
