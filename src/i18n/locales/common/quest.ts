import questInfo from './questInfo.json?raw'

export type QuestType = 'WQ' | 'IQ' | 'LQ'

export type QuestInfo = {
  value: number
  type: QuestType
  hidden?: true
  test?: true
  unreleased?: true
  titleTextMapHash: number
  descTextMapHash?: number
  children?: {
    value: number
    order: number
    hidden?: true
    test?: true
    unreleased?: true
    descTextMapHash?: number
  }[]
}

const questInfos: QuestInfo[] = JSON.parse(questInfo)

export function parseQuestItem(questItem: Record<string, string>, tags: string[]) {
  return questInfos.map(({ value, titleTextMapHash, descTextMapHash, children, ...other }) => ({
    ...other,
    value,
    label: `${value} ` + questItem[titleTextMapHash] || '',
    desc: descTextMapHash && questItem[descTextMapHash],
    children: children?.map(({ value, order, hidden, test, unreleased, descTextMapHash }) => ({
      value,
      label:
        order +
        '. ' +
        ((descTextMapHash && questItem[descTextMapHash]) || '') +
        `(${value})` +
        (hidden ? ` [${tags[0]}]` : '') +
        (test ? ` [${tags[1]}]` : '') +
        (unreleased ? ` [${tags[2]}]` : '')
    }))
  }))
}
