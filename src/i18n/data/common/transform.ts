import { artifactIds } from './artifactIds'
import { parseQuestItem } from './quest'
import { weatherIds } from './weatherIds'

interface Param {
  artifactInfoJson: string
  monsterItemJson: string
  monsterTypeDict: Record<MonsterType, string>
  questItemJson: string
  questTags: string[]
  sceneItemJson: string
  weatherItemJson: string
  weatherType: string[]
}

interface ArtifactText {
  name: string
  desc1: string
  desc2: string
}

export type MonsterType =
  | 'MONSTER_ORDINARY'
  | 'MONSTER_BOSS'
  | 'MONSTER_ENV_ANIMAL'
  | 'MONSTER_FISH'
  | 'MONSTER_PARTNER'

export function transformItems({
  artifactInfoJson,
  monsterItemJson,
  monsterTypeDict,
  questItemJson,
  questTags,
  sceneItemJson,
  weatherItemJson,
  weatherType
}: Param) {
  const artifactTexts: ArtifactText[] = JSON.parse(artifactInfoJson)
  const artifactInfo = artifactTexts.map((item, index) => ({ ...item, ...artifactIds[index] }))

  const monsterItem: Record<MonsterType, Record<number, string>> = JSON.parse(monsterItemJson)
  const monster: Message['monster'] = Object.entries(monsterItem).map(([k, v]) => ({
    value: k,
    label: monsterTypeDict[k as MonsterType],
    children: Object.entries(v).map(([value, label]) => ({ value, label: label + `(${value})` }))
  }))

  const questItem: Record<string, string> = JSON.parse(questItemJson)
  const quest = parseQuestItem(questItem, questTags)

  const sceneItem: Record<string, string> = JSON.parse(sceneItemJson)
  const scene = Object.entries(sceneItem).map(([k, v]) => ({ value: k, label: `${k} ${v}` }))

  const weatherItem: Record<string, string> = JSON.parse(weatherItemJson)
  const weather = weatherType.map((x, i) => ({
    value: x,
    label: x,
    children: weatherIds[i].map(y => ({ value: i + '_' + y, label: weatherItem[y] + `(${y})` }))
  }))

  return { artifactInfo, monster, quest, scene, weather }
}
