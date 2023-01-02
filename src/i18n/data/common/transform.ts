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
  itemTags: string[]
  avatarItemJson: string
  weaponItemJson: string
  weaponTypeDict: Record<WeaponType, string>
  materialItemJson: string
  materialTypeDict: Record<MaterialType, string>
}

interface ArtifactText {
  id: number
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

export type WeaponType = 'WEAPON_SWORD_ONE_HAND' | 'WEAPON_CLAYMORE' | 'WEAPON_POLE' | 'WEAPON_CATALYST' | 'WEAPON_BOW'

export type MaterialType =
  | 'undefined'
  | 'FAKE_ABSORBATE'
  | 'ADSORBATE'
  | 'CONSUME'
  | 'TALENT'
  | 'AVATAR'
  | 'CHEST'
  | 'NOTICE_ADD_HP'
  | 'EXCHANGE'
  | 'WOOD'
  | 'QUEST'
  | 'CRICKET'
  | 'WIDGET'
  | 'ELEM_CRYSTAL'
  | 'SPICE_FOOD'
  | 'ACTIVITY_GEAR'
  | 'ACTIVITY_ROBOT'
  | 'ACTIVITY_JIGSAW'
  | 'FOOD'
  | 'EXP_FRUIT'
  | 'WEAPON_EXP_STONE'
  | 'AVATAR_MATERIAL'
  | 'RELIQUARY_MATERIAL'
  | 'CONSUME_BATCH_USE'
  | 'FISH_BAIT'
  | 'CHEST_BATCH_USE'
  | 'SELECTABLE_CHEST'
  | 'HOME_SEED'
  | 'FLYCLOAK'
  | 'BGM'
  | 'SEA_LAMP'
  | 'CHANNELLER_SLAB_BUFF'
  | 'FISH_ROD'
  | 'NAMECARD'
  | 'ARANARA'
  | 'DESHRET_MANUAL'
  | 'FIREWORKS'
  | 'COSTUME'
  | 'FURNITURE_SUITE_FORMULA'
  | 'FURNITURE_FORMULA'
  | 'RENAME_ITEM'
  | 'GCG_EXCHANGE_ITEM'
  | 'GCG_CARD'
  | 'GCG_CARD_FACE'
  | 'GCG_CARD_BACK'
  | 'GCG_FIELD'

export function transformItems({
  artifactInfoJson,
  monsterItemJson,
  monsterTypeDict,
  questItemJson,
  questTags,
  sceneItemJson,
  weatherItemJson,
  weatherType,
  itemTags,
  avatarItemJson,
  weaponItemJson,
  weaponTypeDict,
  materialItemJson,
  materialTypeDict
}: Param) {
  const artifactTexts: ArtifactText[] = JSON.parse(artifactInfoJson)
  const artifactInfo = artifactTexts
    .sort((a, b) => b.id - a.id)
    .map(({ id, ...other }) => ({
      ...other,
      itemIds: artifactIds[id],
      img: new URL(`/src/assets/artifact/${id}.png`, import.meta.url).href
    }))

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

  const avatarItem: Record<string, string> = JSON.parse(avatarItemJson)
  const avatar = Object.entries(avatarItem).map(([k, v]) => ({ value: k, label: v }))

  const weaponItem: Record<WeaponType, Record<string, string>> = JSON.parse(weaponItemJson)
  const weapon = Object.entries(weaponItem).map(([k, v]) => ({
    value: k,
    label: weaponTypeDict[k as WeaponType],
    children: Object.entries(v).map(([value, label]) => ({ value, label }))
  }))

  const materialItem: Record<MaterialType, Record<string, string>> = JSON.parse(materialItemJson)
  const material = Object.entries(materialItem).map(([k, v]) => ({
    value: k,
    label: materialTypeDict[k as MaterialType],
    children: Object.entries(v).map(([value, label]) => ({ value, label }))
  }))

  const item = [
    { value: 'character', label: itemTags[0], children: avatar },
    { value: 'weapon', label: itemTags[1], children: weapon },
    { value: 'material', label: itemTags[2], children: material }
  ]

  return { artifactInfo, monster, quest, scene, weather, item }
}
