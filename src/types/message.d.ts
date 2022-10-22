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
  quest: QuestItem[]
  scene: Item[]
}

type Item = {
  value: number | string
  label: string
  children?: Item[]
}

type QuestItem = {
  value: number | string
  label: string
  hidden?: true
  test?: true
  unreleased?: true
  children?: QuestItem[]
}
