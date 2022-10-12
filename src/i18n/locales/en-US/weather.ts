export const type: Message['weather']['type'] = ['sunny', 'cloudy', 'rain', 'thunderstorm', 'snow', 'mist', 'other']

export const item: Message['weather']['item'] = [
  { value: 1, label: '大世界' },
  { value: 1, label: '大世界' },
  { value: 1, label: '大世界' }
]

export const weather = { type, item }
