<template>
  <div>
    
    <span v-if="err">{{err}}</span>

    <suspense v-else>
      <!-- Asenkron işlemlerin olduğu componentlerde oluyor. Bu arkadaşlar(Todos,Users) içerisinde asenkron işler barındırıyor ve bu işlemleri bitip veriler yüklendikten sonra ekrana bas demiş olduk suspense ile. -->

      <div>
        <Todos></Todos>

        <h5>Users</h5>
        <Users></Users>
      </div>

       <!--Bir tane root element bekler suspense içine. Başka koyamazsın. O yüzden divin içerisinde belirttik -->      
      <template #fallback> <!-- yüklenirken fallback adlı olan template in içeriğini gösteriyor. -->
        <div>Loading...</div>
      </template>
    </suspense>  
    <hr>

    <!-- <h5>Users</h5>
    <Users></Users> -->
  </div>
</template>

<script setup>
import {onErrorCaptured,ref,defineAsyncComponent} from "@vue/runtime-core";
 //import Todos from "./components/Todos.vue";
 //import Users from "./components/Users.vue";

//suspense yaparken ille de async olarak import etmeye gerek yok componentleri

const err=ref(null);
const Todos= defineAsyncComponent(()=>import("./components/Todos.vue")); //Biz defineAsyncComponent ile bu şekilde componentlerimizi dinamik olarak yükleeyebiliyoruz

const Users=defineAsyncComponent(()=> import("./components/Users.vue"));

onErrorCaptured((e) => { //Asenkron element yüklenirken hata oluştuğunda bu method çalışır.
//err.value=e.message;
  err.value=e;
  return true;
});

</script>