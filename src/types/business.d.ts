interface Mod {
  enabled: boolean
  show?: boolean
  path: string
  id: number
  name: string
  src: string
  images: string[]
  submitter: {
    name: string
    url: string
  }
}
