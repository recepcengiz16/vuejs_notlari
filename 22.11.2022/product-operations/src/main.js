import { createApp } from 'vue';
import App from './App.vue';
import router from "@/router";
import store from './store/store';
import VueResource from 'vue-resource';


const app=createApp(App);

app.use(router);
app.use(store);
app.use(VueResource);

app.config.globalProperties.$filters = {
    currency(value) {
      return parseFloat(value).toLocaleString(undefined,{minimumFractionDigits:2}) +" ₺";
    }
  }

app.mount('#app')
