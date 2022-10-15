interface Message {
  route: {
    [key: string]: string
  }
  artifactInfo: {
    itemIds: number[]
    name: string
    img: string
    description1: string
    description2: string
  }[]
  weather: Item[]
  item: Item[]
  monster: Item[]
}

type Item = {
  value: number | string
  label: string
  children?: Item[]
}
