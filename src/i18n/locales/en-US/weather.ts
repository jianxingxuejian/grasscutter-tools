import json from './weatherItem.json?raw'
import { weatherIds } from '../common/weatherIds'

const type = ['sunny', 'cloudy', 'rain', 'thunderstorm', 'snow', 'mist']

const item: Record<number, string> = JSON.parse(json)

export const weather: Message['weather'] = type.map((x, i) => ({
  value: x,
  label: x,
  children: weatherIds[i].map(y => ({ value: i + '_' + y, label: item[y] + `(${y})` }))
}))
