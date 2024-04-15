import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import {appAxios} from './utils/appAxios';
import axios from 'axios';


const app=createApp(App);
app.use(router);
app.config.globalProperties.$axios=axios; //$axios kullanacağım yerlerde bu axiostan gelecek demiş olduk global olarak. Yani başka urllere istek atabilmek için bu axiosu kullandık
app.config.globalProperties.$appAxios=appAxios; //$appAxios kullanacağım yerlerde bu appAxiostan gelecek demiş olduk global olarak. Site içerisinde herhangi bir yerlere istek atabilmek için bu axiosu kullandık.

app.mount('#app')
