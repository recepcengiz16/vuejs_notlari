import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { appAxios } from './utils/Utils'


const app= createApp(App)
app.provide("appAxios",appAxios);
app.mount('#app')
