import json from './weatherItem.json?raw'
import { weatherIds } from '../common/weatherIds'

const type = ['晴天', '多云', '雨天', '雷雨', '雪天', '多雾']

const item: Record<number, string> = JSON.parse(json)

export const weather: Message['weather'] = type.map((x, i) => ({
  value: x,
  label: x,
  children: weatherIds[i].map(y => ({ value: i + '_' + y, label: item[y] + `(${y})` }))
}))
