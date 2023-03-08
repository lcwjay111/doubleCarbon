import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import dataV from '@kjgl77/datav-vue3'

import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(dataV)

app.mount('#app')
