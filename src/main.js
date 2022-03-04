import { createApp } from 'vue'
import { router } from './routes'
import App from './App.vue'
import { createPinia } from "pinia"
import './index.css'
import './css/btn.css'
import './css/input.css'
import './css/tab.css'
import './css/select.css'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
