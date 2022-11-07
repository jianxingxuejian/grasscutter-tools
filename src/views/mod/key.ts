import type { InjectionKey } from 'vue'

export const modListPushKey = Symbol() as InjectionKey<(mod: Mod) => void>
