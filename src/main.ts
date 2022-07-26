import { createApp } from 'vue'
import { setupStore } from './store'
import { setupRouter } from './router'
import { loadSettings } from '@/utils'
import App from './App.vue'

import 'uno.css'
import './styles/css/index.css'

async function setupApp() {
  const app = createApp(App)
  setupStore(app)
  await loadSettings()
  await setupRouter(app)
  app.mount('#app')
}

setupApp()
