import { type MonsterType, transformItems } from '../common/transform'
import artifactInfoJson from './artifactInfo.json?raw'
import { item } from './item'
import monsterItemJson from './monsterItem.json?raw'
import questItemJson from './questItem.json?raw'
import { route } from './route'
import sceneItemJson from './sceneItem.json?raw'
import weatherItemJson from './weatherItem.json?raw'

const monsterTypeDict: Record<MonsterType, string> = {
  MONSTER_ORDINARY: '怪物',
  MONSTER_BOSS: '首领',
  MONSTER_ENV_ANIMAL: '动物',
  MONSTER_FISH: '鱼',
  MONSTER_PARTNER: '友军'
}

const questTags = ['隐藏', '测试', '未发布']

const weatherType = ['晴天', '多云', '雨天', '雷雨', '雪天', '多雾']

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

const message: Message = { route, item, ...items }

export default message
