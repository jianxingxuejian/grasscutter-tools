import fs from 'fs-extra'
import { groupBy, sortedUniq, difference } from 'lodash-es'
import { weatherIds } from '../src/i18n/locales/common'

type Climate = 'CLIMATE_SUNNY' | 'CLIMATE_CLOUDY' | 'CLIMATE_RAIN' | 'CLIMATE_THUNDERSTORM' | 'CLIMATE_MIST'

interface WeatherJSON {
  areaId: number
  weatherAreaId: number
  maxHeightStr: string
  gadgetId: number
  isDefaultValid?: boolean
  priority: number
  profileName: string
  defaultClimate: Climate
  isUseDefault?: boolean
  sceneId: number
}

const read = fs.readFileSync('scripts/WeatherExcelConfigData.json', 'utf-8')
const weatherJson: WeatherJSON[] = JSON.parse(read)
const weatherObj: Record<number, string> = {}
weatherJson.forEach(({ areaId, profileName }) => {
  weatherObj[areaId] = profileName.replace('Data/Environment/EnviroSystemProfile/', '').replace('/ESP', '').replace('ESP_', '')
})
fs.writeFile('scripts/weather.json', JSON.stringify(weatherObj))

const filter = (name: string) => weatherJson.filter(item => item.profileName.includes(name)).map(item => item.areaId)
const general_md = filter('Md_General')
const general_ly = filter('Ly_General')
const general_dq = filter('Dq_General')
const general_xm = filter('Xm_General')

const group = (key: string) => groupBy(weatherJson, 'defaultClimate')[key].map(item => item.areaId)
const sunny = group('CLIMATE_SUNNY')
const cloudy = group('CLIMATE_CLOUDY')
const rain = group('CLIMATE_RAIN')
const thunderstorm = group('CLIMATE_THUNDERSTORM')
// const snow = Object.values(group)
//   .flat()
//   .filter(item => item.profileName.includes('Snow'))
//   .map(item => item.areaId)
//   .sort((a, b) => a - b)
const snow = [0, 2022, 2023, 2028, 2029, 2034, 2035, 2037, 2113, 2117, 2118, 2121, 2124, 2127, 2130, 2132, 2135, 2138, 2191, 2225]
const mist = group('CLIMATE_MIST')

const weather = sortedUniq([
  [0, ...general_md, ...general_ly, ...general_dq, ...general_xm, ...sunny],
  cloudy,
  [0, ...general_md, ...general_ly, ...general_dq, ...general_xm, ...rain],
  [0, ...general_md, ...general_ly, ...general_dq, ...general_xm, ...thunderstorm],
  snow,
  [0, ...general_md, ...general_ly, ...general_dq, ...mist, 2024, 2025, 2027, 2031, 2032, 2036, 2038, 2039, 2125, 2131]
])

weather.forEach((item, index) => console.log(difference(item, weatherIds[index])))

fs.writeFile('scripts/weatherIds.json', JSON.stringify(weather))
