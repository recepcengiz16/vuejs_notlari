<template>
    <div>
        <ul>
            <li v-for="(item,index) in agacElemanlari" :key="index">
                {{item.title}}
            </li>
        </ul>
    </div>
</template>


<script>

import { mapGetters } from 'vuex';

export default{
     computed:{//getterslardaki hangi verilere erişmek istiyorsak mapGetters kullanırız
         // ...mapGetters(["woodItems","activeUser"]) bu computedı kullanabilmek için mapGetters spread operetorü(...) ile içine yazdık Ya dizi şeklinde kullanacağım istediğim  getters değişkenlerini ya da obje

        ...mapGetters({
          agacElemanlari:"woodItems",
         // woodItems:"woodItems",
          activeUser:"activeUser"
        })
      } 
}

</script>