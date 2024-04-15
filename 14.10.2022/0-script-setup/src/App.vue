<template>
  <h3>{{title}}</h3>

  <input type="text" v-model="state.personal.name"/>
  <input type="text" v-model="state.personal.lname"/>

     <!-- <input type="text" v-model="name"/>
  <input type="text" v-model="lname"/> -->

  <!-- {{name}} {{lname}} -->
  
  <button @click="inc">{{counter}}</button>  
  <oddorEven :counter="counter" @odd-event="alertMe"/>

</template>

<script setup>
  //script setup ı export etmene gerek yok. Zaten kendisi otomatik içindeki verileri dışarıya export ediyor
  //Var olan componenti kullanabilirsin ama yeni bir component oluşturamazsın
  
  //setup before create() created() ve data() yerine geçiyordu.

  //import {ref,reactive,watch} from "vue";
  import {reactive,watch} from "vue";

  import oddorEven from "@/components/OddorEven.vue";
  import Utils from "@/composables/Utils.js";
  //import UserApp from "@/composables/UserApp.js";

  const {title,counter,inc,alertMe}=Utils();
  
  //const name=ref(""); refler genelde primitif değerler için tercih edilir, array de alabiliyor. ama obje olunca tercih edilmez, onun yerine reactive geldi. aynı data() gibi geriye bir şey return etmesi gerekli
 // const lname=ref("");

  const state=reactive({ //birden fazla ilişkili datayı reactive ile tutabiliriz.
    personal:{
      name:"Recep",
      lname:null
    },
    itemList:[]
  });

  watch(()=> JSON.parse(JSON.stringify(state.personal)),(newPersonal,oldPersonal)=>{
      //JSON.parse(JSON.stringify(state.personal)) metot ile neden bu yapıyı return ettik. Bir şeyin buraya bir değer etmesi lazım o yüzden arrow fonks. kullandık. obje değerini algılayamıyordu old ve new değerini ikisini de new değer yapıyordu. json yapısı ile old valuesunu elde etmiş olduk.
      console.log(newPersonal,oldPersonal);
  })

  console.log(state.personal.name);

</script>