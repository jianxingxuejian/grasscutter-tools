interface Settings {
  server: Server
  token: string
  adminToken: string
  locale: 'zh-CN' | 'en-US'
}

interface Server {
  protocol: 'http' | 'https'
  ip: string
  uid: string
}
