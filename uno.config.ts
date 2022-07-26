import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  exclude: ['node_modules', '.git', 'dist'],
  presets: [presetUno()],
  shortcuts: {
    'flex-col': 'flex flex-col',
    'flex-row': 'flex flex-row',
    'flex-center': 'flex justify-center items-center',
    'flex-start': 'flex justify-start items-center',
    'flex-end': 'flex justify-end items-center',
    'flex-between': 'flex justify-between items-center',
    'flex-evenly': 'flex justify-evenly items-center',
    'flex-around': 'flex justify-around items-center'
  }
})
