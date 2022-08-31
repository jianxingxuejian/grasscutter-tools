import type { PluginOption } from 'vite'
import vue from './vue'
import unplugin from './unplugin'
import unocss from './unocss'
import i18n from './i18n'
import https from './https'

/**
 * 安装vite插件
 */
export function setupVitePlugins(): PluginOption[] {
  const plugins = [...vue, ...unplugin, unocss, i18n, https]
  return plugins
}
