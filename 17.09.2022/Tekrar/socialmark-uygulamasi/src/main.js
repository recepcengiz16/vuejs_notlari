import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index';
import "@/assets/style.css";

import appHeader from "@/components/Shared/appHeader"
import appBookmarkList from "@/components/Shared/AppBookmarkList" //bu şekilde tanımlayınca indexi otomatik olarak alıcak
import {appAxios} from './utils/appAxios';
import store from './store';

import io from "socket.io-client";
const socket=io("http://localhost:1996");

const app= createApp(App);

app.config.globalProperties.$appAxios=appAxios;
app.config.globalProperties.$socket=socket;

app.component("appHeader",appHeader);
app.component("appBookmarkList",appBookmarkList);

app.use(router);
app.use(store);

app.mount('#app');
