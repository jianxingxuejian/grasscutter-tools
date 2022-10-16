import fs from 'fs-extra'
import { groupBy, difference } from 'lodash-es'
import { item_monster, MonsterType } from '../../src/i18n/locales/en-US/monster'

interface MonsterJSON extends Record<string, unknown> {
  id: number
  monsterName: string
  type: MonsterType
  ai: string
}

export function parseMonster() {
  const read = fs.readFileSync('scripts/Grasscutter_Resources/Resources/ExcelBinOutput/MonsterExcelConfigData.json', 'utf-8')
  const monsterJson: MonsterJSON[] = JSON.parse(read)
  const monsterObj: Record<MonsterType, Record<number, string>> = {
    MONSTER_ORDINARY: {},
    MONSTER_BOSS: {},
    MONSTER_ENV_ANIMAL: {},
    MONSTER_FISH: {},
    MONSTER_PARTNER: {}
  }
  Object.entries(
    groupBy(
      monsterJson.sort((a, b) => a.id - b.id),
      'type'
    )
  ).forEach(([k, v]) => v.forEach(({ id, monsterName }) => (monsterObj[k as MonsterType][id] = monsterName)))
  fs.writeFile('scripts/target/monster.json', JSON.stringify(monsterObj))

  const diff_id_monster = difference(
    monsterJson.map(item => item.id),
    Object.values(item_monster)
      .map(item => Object.keys(item).map(item => Number(item)))
      .flat()
  )
  console.log(monsterJson.filter(item => diff_id_monster.includes(item.id)).map(({ id, monsterName, type }) => ({ id, monsterName, type })))
}
