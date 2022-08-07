interface Message {
  route: {
    [key: string]: string
  }
  item: Item[]
}

type Item = {
  value: number | string
  label: string
  children?: Item[]
}
