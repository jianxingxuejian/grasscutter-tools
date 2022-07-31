/** 动态引入静态资源 */
export function getImageUrl(path: string | undefined) {
  if (path) {
    return new URL(`/src/assets/${path}`, import.meta.url).href
  }
  return undefined
}
