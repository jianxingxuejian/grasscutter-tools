import type { CascaderOption } from 'naive-ui'

export function filterIgnoreCase(pattern: string, _: CascaderOption, path: CascaderOption[]) {
  return path.some(option => option.label && option.label.toLowerCase().includes(pattern.toLowerCase()))
}
