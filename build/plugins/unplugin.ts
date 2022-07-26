import Icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'

export default [
  Icons({
    autoInstall: true,
    compiler: 'vue3',
    customCollections: {
      // 加载自定义图标
      custom: FileSystemIconLoader('src/assets/icons')
    },
    scale: 1,
    defaultClass: 'inline-block'
  }),
  Components({
    dirs: ['src/components'],
    deep: true,
    directives: true,
    dts: 'src/types/components.d.ts',
    types: [{ from: 'vue-router', names: ['RouterLink', 'RouterView'] }],
    resolvers: [
      NaiveUiResolver(),
      IconsResolver({
        customCollections: ['custom'],
        prefix: 'icon'
      })
    ]
  }),
  AutoImport({
    include: [/\.vue$/, /\.vue\?vue/, /\.ts$/],
    imports: ['vue', 'vue-router', 'pinia'],
    dts: 'src/types/auto-import.d.ts',
    eslintrc: {
      enabled: true,
      filepath: './.eslintrc-auto-import.json'
    }
  })
]
