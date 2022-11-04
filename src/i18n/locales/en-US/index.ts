import { type MonsterType, transformItems } from '../common'
import artifactInfoJson from './artifactInfo.json?raw'
import { global } from './global'
import { item } from './item'
import monsterItemJson from './monsterItem.json?raw'
import questItemJson from './questItem.json?raw'
import { route } from './route'
import sceneItemJson from './sceneItem.json?raw'
import weatherItemJson from './weatherItem.json?raw'

const monsterTypeDict: Record<MonsterType, string> = {
  MONSTER_ORDINARY: 'Monster',
  MONSTER_BOSS: 'Boss',
  MONSTER_ENV_ANIMAL: 'Animal',
  MONSTER_FISH: 'Fish',
  MONSTER_PARTNER: 'Partner'
}

const questTags = ['hidden', 'test', 'unreleased']

const weatherType = ['sunny', 'cloudy', 'rain', 'thunderstorm', 'snow', 'mist']

const items = transformItems({
  artifactInfoJson,
  monsterItemJson,
  monsterTypeDict,
  questItemJson,
  questTags,
  sceneItemJson,
  weatherItemJson,
  weatherType
})

const message: Message = { global, route, item, ...items }

export default message
