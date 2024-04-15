import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
//import axios from 'axios';
import {appAxios} from '@/utils/AppAxios';

const app = createApp(App);

app.use(router);
//app.config.globalProperties.$axios=axios; //axiosu global olarak tanımladık.
app.config.globalProperties.$appAxios=appAxios; //axiosu global olarak tanımladık.

app.mount('#app');
