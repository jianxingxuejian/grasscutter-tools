/** 动态引入静态资源 */
export function getImageUrl(path: string) {
  return new URL(`/src/assets/${path}`, import.meta.url).href
}
