import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import routes from './routes'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'

import 'primeicons/primeicons.css';

import PrimeVue from 'primevue/config';
// import 'primevue/resources/themes/aura-light-green/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';  // Import PrimeIcons CSS

import Select from 'primevue/selectbutton'
import Dialog from 'primevue/dialog'


const pinia = createPinia()
pinia.use(piniaPluginPersistedState)
const app = createApp(App)

app.use(PrimeVue)

app.component("Select", Select)
app.component('Dialog', Dialog)

app.use(routes)
app.use(pinia)
app.mount('#app')