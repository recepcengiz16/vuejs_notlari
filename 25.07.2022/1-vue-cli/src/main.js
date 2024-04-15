import { createApp } from 'vue' //vue dan create app fonks. aldık.
import App from './App.vue' //app.vue daki instance ı alıp ve onu create app yolluyor. options aslında App; yani component içinde kullanacağımız vue instance yapıları

//Global tanımlamalar yapabildiğimiz ve uygulamanın çalışmasını sağlayan dosyadır main js

import "@/assets/style.css"; //@ işareti /src demek
import appHeader from "@/components/AppHeader.vue";  //main js de import ederek global tanımlamış(global registering deniliyor global importa) oluyorsun. Bir component içine yerleştirince de local registering deniliyor. App.vue içindeki components gibi

const app= createApp(App)

app.component("app-header",appHeader);

app.mount('#app')
