import { createApp } from 'vue'
import App from './App.vue'
import store from './store';

const app= createApp(App);

app.use(store); //bu şekilde de storeu tanıtıyoruz

app.mount('#app');
