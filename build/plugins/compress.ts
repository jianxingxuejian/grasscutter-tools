import ViteCompression from 'vite-plugin-compression'

export default (env: ImportMetaEnv) =>
  ViteCompression({
    disable: !JSON.parse(env.VITE_COMPRESS)
  })
