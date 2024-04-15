<template>
  <div>
      <h3>{{ title }}</h3>  <br>
      <input type="text" v-model="title" />
      <!-- <button @click="show=!show">Toogle</button> -->
      <button @click="toogleIt">Toogle</button>
      
      <p v-if="show">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis saepe totam quaerat eligendi optio id, aliquam maiores rem, eaque odio voluptatibus sapiente nesciunt consectetur magnam maxime natus voluptas nihil et!
      </p>

      <!--   --------------------------------------------------------------------          -->

      {{ greeting() }} <!-- fonks. da bu şekilde çağırıyoruz -->

      {{ titleLengthMessage }} <!-- computed -->
     
      {{ user.name }} <!-- objedeki veriye erişim -->

      <button @click="counter++">Artır</button> {{ counter }} {{ OddOrEven }}

      <!--     --------------------------------------------------------------------        -->
      <input type="text" v-model="searchText" />
      <p v-if="isTyping">Şu an yazıyor</p>

  </div>
</template>

<script>
//Composition apide reaktif olacak arkadaşları özellikle belirtmemiz gerekiyor. 

  // import { ref,computed,watch,watchEffect } from "vue"; reaktif olmasını istediğimiz arkadaşlar için ref bize reaktif değişken tanımlamamızı sağlıyor. Default olarak hepsini reaktif yapmıyor composition apide

import { ref } from 'vue';
import Counter from "./composables/Counter.js"
import Header from "./composables/Header.js"
import Search from "./composables/Search.js"
import Toogle from "./composables/Counter.js"

export default {


  // data() {
  //   return {
  //     title:"Bu bir başlık",
  //   }
  // },
  // beforeCreate(){console.log("Beforecreate çalıştı");},
  // created(){console.log("Created çalıştı");},

  setup() {//composition api ile option apiyi birlikte kullanmamız için setup fonks. var
    // option apideki data, beforecreate ve created metotlarının yerine geldi. Beforecreate ve created dan önce çalışıyor. Data içerisindeki değişkenler gibi değişken tanımlamamıza imkan veriyor. Buradaki amaç datadaki reactivity daha oluşmadan ve datayı ona göre oluşturmak olduğu için beforecreateden bile önce çalışıyor 
    
    const {counter,OddOrEven} =Counter(); //counterda bir fonks ve bize obje dönüyordu. Onları da destractive yapı ile aldık.

    const {title,titleLengthMessage} =Header();
    const {isTyping,searchText} = Search();
    const {show,toogleIt} =Toogle();

    

   // !************************* OBJECT
    
    const user = ref({
      name: 'John',
      age: 25
    });

 // !****************************

    // !********************************** FONKSİYON

     // const toogleIt=()=>{} isimlendirilmiş fonks şeklinde ya da aşağıdaki gibi fonks yazabiliriz.

    // function toogleIt(){
    //     show=!show;
    // }

    const greeting = ref(() => {
      console.log('Hello, World!');
    });

    //greeting.value(); fonks için valueyu fonks gibi çağırmamız lazım setup fonks içinde, değişkenlerde direk    .value şeklinde

   

 // !**************************************




// !************************************** WATCH
   
      
    
    return { //setup fonksiyonu geriye bir obje return etmeli, datadaki değişkenler için return edilen obje manasını yakalaması için. Biz burada refleri döndürüyoruz normalde ama template tarafına bu obje içerisindeki sadece valuesunu kullanabilmemizi açıyor. yani title.value gönderiyor gibi düşünebilirsin
      
      greeting, // ref içerisinde verdiğimiz bir fonks.
      user, //obje
      title,
      show,
      toogleIt, //fonks
       titleLengthMessage,  //computed
      OddOrEven, //computed
       counter,
      searchText,
       isTyping

    }

  }
}
</script>