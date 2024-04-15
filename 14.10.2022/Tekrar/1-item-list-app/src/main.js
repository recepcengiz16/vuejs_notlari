import { createApp } from 'vue'
import appHeading from "./components/ui/appHeading.vue";
import "./assets/style.css";

import App from './App.vue'

const app= createApp(App);
app.component("heading",appHeading);
app.mount('#app');
