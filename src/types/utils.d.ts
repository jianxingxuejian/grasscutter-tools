/** 将对象的所有属性设置为可选且可为null */
type NullablePartial<T> = {
  [P in keyof T]?: T[P] | null
}

/** 将对象的部分属性设置为可选 */
type Optional<T extends Record<string, any>, K extends keyof T = keyof T> = Omit<T, K> & Partial<Pick<T, K>>
