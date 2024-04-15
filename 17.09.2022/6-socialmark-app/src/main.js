import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import "@/assets/style.css";
import appHeader from "@/components/Shared/appHeader";
import appBookmarkList from "@/components/Shared/AppBookmarkList";
import {appAxios} from '@/utils/appAxios.js';
import store from './store';

//kayıt olacak kişilerin şifrelerini kriptolamak için crypto js kullandık. npm install crypto-js
//npm install --save vuex-persistedstate ile statein kalıcı olarak tutulmasını sağlamış olduk.
//$ npm install secure-ls ile daha kontrollü state daeki verileri alıp okurken 

const app=createApp(App);
app.config.globalProperties.$appAxios=appAxios;
app.component("appHeader",appHeader);
app.component("appBookmarkList",appBookmarkList);
app.use(store); //use ile bu kütüphaneyi, plugin i kullan demiş oluyoruz
app.use(router);
app.mount('#app')
