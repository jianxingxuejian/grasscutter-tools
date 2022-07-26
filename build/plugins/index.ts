import type { PluginOption } from 'vite'
import vue from './vue'
import unplugin from './unplugin'
import unocss from './unocss'

/**
 * 安装vite插件
 */
export function setupVitePlugins(): PluginOption[] {
  const plugins = [...vue, ...unplugin, unocss]
  return plugins
}
