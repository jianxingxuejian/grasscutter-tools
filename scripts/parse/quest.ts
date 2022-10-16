import fs from 'fs-extra'
import { QuestType, QuestInfo } from '../../src/i18n/locales/common'

interface QuestJSON {
  id: number
  type: QuestType
  showType: string
  subQuests?: QuestChildren[]
  titleTextMapHash: number
  descTextMapHash?: number
  luaPath: string
}

interface QuestChildren {
  subId: number
  mainId: number
  order: number
  showType: string
  descTextMapHash?: number
}

const path = 'scripts/Grasscutter_Resources/Resources/BinOutput/Quest/'

const textMap_CHS: Record<number, string> = JSON.parse(
  fs.readFileSync('scripts/Grasscutter_Resources/Resources/TextMap/TextMapCHS.json', 'utf-8')
)
const textMap_EN: Record<string, string> = JSON.parse(
  fs.readFileSync('scripts/Grasscutter_Resources/Resources/TextMap/TextMapEN.json', 'utf-8')
)

function parseText(text: string, showType: string) {
  let hidden = showType === 'QUEST_HIDDEN' || undefined
  if (
    text.includes('$HIDDEN') ||
    text.includes('$Hidden') ||
    text.includes('【隐藏】') ||
    text.includes('（隐藏）') ||
    text.includes('(隐藏)')
  ) {
    text = text.replace('$HIDDEN', '').replace('$Hidden', '').replace('【隐藏】', '').replace('（隐藏）', '').replace('(隐藏)', '')
    hidden = true
  }
  let test: true | undefined
  if (
    text.includes('(TEST)') ||
    text.includes('(test)') ||
    text.includes('（test）') ||
    text.includes('(test）') ||
    text.includes('（test)') ||
    text.includes('test')
  ) {
    text = text
      .replace('(TEST)', '')
      .replace('(test)', '')
      .replace('（test）', '')
      .replace('(test）', '')
      .replace('（test)', '')
      .replace('test', '')
    test = true
  }
  let unreleased: true | undefined
  if (text.includes('$UNRELEASED')) {
    text = text.replace('$UNRELEASED', '')
    unreleased = true
  }
  return { hidden, test, unreleased, newText: text.trim() }
}

const questInfo: QuestInfo[] = []
const questItem_CHS: Record<number, string> = {}

fs.readdirSync(path, 'utf-8').forEach(item => {
  const read = fs.readFileSync(path + item, 'utf-8')
  const { id, type, showType, subQuests, titleTextMapHash, descTextMapHash }: QuestJSON = JSON.parse(read)
  const text = textMap_CHS[titleTextMapHash] || ''
  let desc =
    descTextMapHash &&
    textMap_CHS[descTextMapHash]
      .replace('$HIDDEN', '')
      .replace('$Hidden', '')
      .replace('【隐藏】', '')
      .replace('（隐藏）', '')
      .replace('(隐藏)', '')
      .replace('(TEST)', '')
      .replace('(test)', '')
      .replace('（test）', '')
      .replace('(test）', '')
      .replace('（test)', '')
      .replace('test', '')
      .replace('$UNRELEASED', '')
      .trim()

  const { hidden, test, unreleased, newText } = parseText(text, showType)
  if (titleTextMapHash && text) {
    questItem_CHS[titleTextMapHash] = newText
  }
  if (descTextMapHash && desc) {
    questItem_CHS[descTextMapHash] = desc
  }
  if (desc === newText) {
    desc = undefined
  }
  questInfo.push({
    value: id,
    type,
    hidden,
    test,
    unreleased,
    titleTextMapHash,
    descTextMapHash,
    children:
      subQuests &&
      subQuests
        .sort((a, b) => a.order - b.order)
        .map(({ subId, descTextMapHash, order, showType }) => {
          const text = (descTextMapHash && textMap_CHS[descTextMapHash]) || ''
          const { hidden, test, unreleased, newText } = parseText(text, showType)
          if (descTextMapHash && newText) {
            questItem_CHS[descTextMapHash] = newText
          }
          return { value: subId, order, hidden, test, unreleased, descTextMapHash }
        })
  })
})
questInfo.sort((a, b) => a.value - b.value)
fs.writeFile('scripts/target/questInfo.json', JSON.stringify(questInfo))

const questItem_EN: Record<number, string> = {}
Object.keys(questItem_CHS).forEach(item => (questItem_EN[item as unknown as number] = textMap_EN[item]))
fs.writeFile('scripts/target/questItem_zh-CN.json', JSON.stringify(questItem_CHS))
fs.writeFile('scripts/target/questItem_en-US.json', JSON.stringify(questItem_EN))
