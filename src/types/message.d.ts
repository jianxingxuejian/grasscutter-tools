interface Message {
  route: {
    [key: string]: string
  }
  weather: string[]
  item: Item[]
}

type Item = {
  value: number | string
  label: string
  children?: Item[]
}
