const type: Message['weather']['type'] = ['晴天', '多云', '雨', '雷雨', '雪', '雾', '其它']

const item: Message['weather']['item'] = [
  { value: 1, label: '大世界' },
  { value: 1, label: '大世界' },
  { value: 1, label: '大世界' }
]

export const weather = { type, item }
