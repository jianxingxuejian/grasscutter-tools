interface Mod {
  enabled: boolean
  path: string
  id: number
  name: string
  images: string[]
  submitter: {
    name: string
    url: string
  }
}
