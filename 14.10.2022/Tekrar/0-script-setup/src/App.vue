<template>
  <div>
    <h3>{{ title }}</h3>
    <input type="text" v-model="title"/>
    

    <button @click="inc">Artır: {{ counter }}</button>

    <OddOrEven :counter="counter" @odd-event="alertMe"></OddOrEven>
    
    <hr/>

    <div>
      <h1>User App</h1>
      <input type="text" v-model="state.personal.firstName"/>
      <input type="text" v-model="state.personal.lastName" />

      {{ state.personal }}
    </div>
  </div>
</template>

<script setup>
    //artık bu script tagi bizim setup fonks olmuş oluyor setup yazınca. script setup olunca otomatik export ediyor dışarıya. Biz de o yüzden tekrardan export default diye açmıyoruz.

  import {ref,reactive,watch} from "vue";
  import OddOrEven from "./components/OddOrEven.vue"; //direk algılıyor componenti de. return etmene gerek yok
  import Utils from "./composables/Utils";

  const {title,counter,alertMe,inc} = Utils();
  

  // !----------------------- USER APP
  //ref genelde primitif türler alıyor. Array de alabilir. Obje olunca ref kullanmamız tercih edilmez.
const state=reactive({ //objelerin reaktif olması için reactive tercih edilir. data(){} gibi düşün bunu, içinde değişkenler tutarız.
   personal:{
      id:1,
      firstName:"Recep",
      lastName:"Cengiz"
   },
   itemList:[]
});

watch(
  ()=>JSON.parse(JSON.stringify(state.personal)), //burada eski değerini tutmuyordu. Tutması için bu şekilde yazmak lazım ilk parametreyi objede
  (newPersonal,oldPersonal)=>{
  console.log("newPersonal",newPersonal);
  console.log('oldPersonal :>> ', oldPersonal);

});

console.log(state.personal.firstName); 
</script>