import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')
