import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMask from '@devindex/vue-mask'


import { createPinia } from 'pinia'
const pinia = createPinia()

createApp(App).use(store).use(router).use(pinia).use(VueMask).mount('#app')
