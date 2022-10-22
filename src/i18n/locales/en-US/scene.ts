import json from './sceneItem.json?raw'

const sceneItem: Record<string, string> = JSON.parse(json)

export const scene: Message['scene'] = Object.entries(sceneItem).map(([k, v]) => ({ value: k, label: `${k} ${v}` }))
