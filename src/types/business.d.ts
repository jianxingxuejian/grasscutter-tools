interface Mod extends ModBasic {
  path: string
  src: string
  enabled: boolean
  show?: boolean
  iniName: string
}

interface ModBasic {
  id: number
  name: string
  images: string[]
  submitter: {
    name: string
    url: string
  }
  type?: number
  modId?: number
}
