import weatherItem from './weatherItem.json?raw'
import weatherIds from '../common/weatherIds.json?raw'

const type = ['sunny', 'cloudy', 'rain', 'thunderstorm', 'snow', 'mist']

const item: Record<number, string> = JSON.parse(weatherItem)
const ids: number[][] = JSON.parse(weatherIds)

export const weather: Message['weather'] = type.map((x, i) => ({
  value: x,
  label: x,
  children: ids[i].map(y => ({ value: i + '_' + y, label: item[y] + `(${y})` }))
}))
