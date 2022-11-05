import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import path from 'path'

export default VueI18nPlugin({
  include: path.resolve('./src/i18n/locales/**')
})
