import questInfo from './questInfo.json?raw'

type QuestType = 'WQ' | 'IQ' | 'LQ'

type QuestInfo = {
  id: number
  type: QuestType
  hidden?: true
  test?: true
  unreleased?: true
  titleHash?: number
  descHash?: number
  children?: {
    subId: number
    order: number
    hidden?: true
    test?: true
    unreleased?: true
    descHash?: number
  }[]
}

const questInfos: QuestInfo[] = JSON.parse(questInfo)

export function parseQuestItem(questItem: Record<string, string>, tags: string[]) {
  return questInfos.map(({ id, titleHash, descHash, children, ...other }) => ({
    ...other,
    value: id,
    label: `${id}  ` + (titleHash && questItem[titleHash]) || '',
    desc: descHash && questItem[descHash],
    children: children?.map(({ subId, order, hidden, test, unreleased, descHash }) => ({
      value: subId,
      label:
        order +
        '. ' +
        ((descHash && questItem[descHash]) || '') +
        ` (${subId})` +
        (hidden ? ` [${tags[0]}]` : '') +
        (test ? ` [${tags[1]}]` : '') +
        (unreleased ? ` [${tags[2]}]` : '')
    }))
  }))
}
