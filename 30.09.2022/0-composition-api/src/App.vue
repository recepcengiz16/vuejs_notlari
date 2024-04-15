<template>
  <div>
    <!--
      Composition api ile option api yi iç içe kullanabiliriz.
    -->
    {{title}}
    
    <input type="text" v-model="title" /><!-- Burada sadece v-model yazmak ile reaktivif olmuyor composition apide, aşağıda ref i import etmemiz lazım -->

    <p v-if="show">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, nobis voluptatibus quaerat ducimus labore, tempore incidunt ab, provident vel cumque ea. Eius sit culpa dolorem iure repellat necessitatibus dolore quia.
    </p>

    {{titleLengthMessage}}

    <!-- <button @click="show = !show">Toogle</button> -->
    <button @click="toogleIt">Toogle</button>

    <hr/>
    <button @click="counter++">{{counter}} {{oddorEven}} </button>

    <hr />
    <input type="text" v-model="searchText" />
    <p v-if="isTyping">Şu an yazıyor</p>
  </div>
</template>

<script>
  //computedlar fonks. gibi çalışan değişkenlerdir.
  import Counter from "./composables/Counter.js";
  import Header from "./composables/Header.js";
  import Search from "./composables/Search.js";
  import Toogle from "./composables/Toogle.js";
  export default {
    data(){
      return{
        title:"Başlık nasıl kanka"
      }
    },
    setup(){
      //composition api ile option api bir arada kullanmak için setup fonks. gerekli.
      //data,created, before create yerine geldi ,life cycle hook gibi before create ve created dan önce çalışıyor. Data içindeki variable ları tanımlamaya imkan veiryor. Datadaki veriler oluşmadan çalışıp datayı ona göre oluşturduğu için create den önce çalışıyor.

      //Geriye bir obje return etmeli yani datanın içindeki nasıl return ediyorsa bu da öyle

      const {counter,oddorEven}=Counter(); //counter bir fonks. ve return olarak bir obje dönüyor ve destructive yapı ile dönen objedeki değişkenleri sol taraftaki yapılara eşitledik

      const {title,titleLengthMessage}=Header();
      const {show,toogleIt}=Toogle();
      const {isTyping,searchText}=Search();

      
     
      return { // biz objeden(reften dolayı bir obje halini alıyor değişkenler) return ederken ref sadece valuesunu kullandırttırıyor.
        title ,
        show,
        toogleIt,
        titleLengthMessage,
        counter,
        oddorEven,
        searchText,
        isTyping
      }
    }
  }
</script>