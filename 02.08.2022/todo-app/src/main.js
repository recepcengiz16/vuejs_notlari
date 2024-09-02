import { createApp } from 'vue' // bir değişken ya da method export ettiğimizde süslü parantez kullanırız. Aslında şu mana var: Biz birden fazla şey(değişken,metot vs) dışarı aktarmak istiyorsak export ile dosyadan dışarı aktarırız ve çağırdığımız sayfada da import ederken o dosyada birden fazla şey olduğu için bu sayfaya dahil edeceğimiz şeyler bunlar diye importta süslü parantez içinde şunları getir diye belirtiriz diğerlerinin arasından
 
import App from './App.vue'

//export const eventBus=new Vue();

createApp(App).mount('#app')
