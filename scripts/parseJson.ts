import { parseWeather, parseMonster } from './parse'

export function parse() {
  const args = process.argv.slice(2)[0]
  switch (args) {
    case 'weather':
      parseWeather()
      break
    case 'monster':
      parseMonster()
      break
  }
}

parse()
