import { createApp } from 'vue'
import App from './App.vue'

const app=createApp(App)
app.provide('CDN_URL', 'https://cdn.jsdelivr.net/gh/yudhees/cdn/portfolio/assets');
app.mount('#app')
