export function parseMd(text: string, limit?: number) {
  const target: string[] = []
  let count = 0
  for (const line of text.split('\n')) {
    if (/^## [v[\d.]+/.test(line)) {
      count++
    }
    if (limit && count > limit) break
    if (line.startsWith('##') || line.startsWith('-')) {
      target.push(line)
    }
  }
  return target.join('\n')
}
