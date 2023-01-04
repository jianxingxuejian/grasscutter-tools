interface Setting {
  server: {
    protocol: 'http' | 'https'
    ip: string
    username: string
    history: string[]
  }
  token: string
  admin_token: string
  locale: 'zh-CN' | 'en' | 'ja-JP' | 'es'
  theme: 'light' | 'dark'
  alwaysOnTop: boolean
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
  launcher: {
    gamePath: string
    akebiPath: string
    GCPath: string
    gameStart: boolean
    modStart: boolean
    akebiStart: boolean
    GCStart: boolean
    popup: boolean
    fullscreen: boolean
    customResolution: boolean
    height: string
    width: string
  }
  seed: {
    luacPath: string
  }
}

type LocaleModule = Record<string, { default: unknown }>
