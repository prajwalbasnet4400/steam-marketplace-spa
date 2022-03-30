import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

var vue_app = createApp(App).use(router).mount('#app')
