import json from './questItem.json?raw'
import { parseQuestItem } from '../common'

const questItem: Record<string, string> = JSON.parse(json)

export const quest: Message['quest'] = parseQuestItem(questItem, ['hidden', 'test', 'unreleased'])
