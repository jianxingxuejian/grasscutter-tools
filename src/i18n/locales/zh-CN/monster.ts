import json from './monsterItem.json?raw'

type MonsterType = 'MONSTER_ORDINARY' | 'MONSTER_BOSS' | 'MONSTER_ENV_ANIMAL' | 'MONSTER_FISH' | 'MONSTER_PARTNER'

const monsterTypeRecord: Record<MonsterType, string> = {
  MONSTER_ORDINARY: '怪物',
  MONSTER_BOSS: '首领',
  MONSTER_ENV_ANIMAL: '动物',
  MONSTER_FISH: '鱼',
  MONSTER_PARTNER: '友军'
}

const item_monster: Record<MonsterType, Record<number, string>> = JSON.parse(json)

export const monster: Message['monster'] = Object.entries(item_monster).map(([k, v]) => ({
  value: k,
  label: monsterTypeRecord[k as MonsterType],
  children: Object.entries(v).map(([value, label]) => ({ value, label: label + `(${value})` }))
}))
