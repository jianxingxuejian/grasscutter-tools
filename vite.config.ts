import { fileURLToPath } from 'url'
import { defineConfig, loadEnv } from 'vite'
import { setupVitePlugins, sanitizeFileName } from './build'

// https://vitejs.dev/config/
export default defineConfig(env => {
  const viteEnv = loadEnv(env.mode, process.cwd()) as ImportMetaEnv
  const rootPath = fileURLToPath(new URL('./', import.meta.url))
  const srcPath = `${rootPath}src`

  return {
    base: viteEnv.VITE_BASE_URL,
    resolve: {
      alias: {
        '~': rootPath,
        '@': srcPath
      }
    },
    server: {
      port: 3000,
      host: true
    },
    plugins: setupVitePlugins(viteEnv),
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./src/styles/scss/index.scss";'
        }
      }
    },
    build: {
      rollupOptions: {
        output: {
          sanitizeFileName
        }
      }
    }
  }
})
