<template>
    <div>
        <ul>
            <li v-for="item in woodItems" :key="item.id">{{ item.title }}</li>
        </ul>  
    </div>
</template>

<script>

import { mapGetters } from 'vuex'; //mapGettersı kullanmak için import etmemiz gerekli.

export default {
      /*
        MapGetters bir bileşene getterları eklemeyi kolaylaştırır.
      */
    computed:{
        // ... (spread operatörü) bir dizi veya nesnenin elemanlarını veya özelliklerini ayırarak başka bir diziye veya nesneye kopyalamak veya birleştirmek için kullanılır.

        ...mapGetters(["woodItems","activeUser"]), //iki syntaxı var mapGetters ın. Dizi şeklinde
        /*
        
        ...mapGetters({
          agacElemanlari:"woodItems"
        })
        
         */
      }
}
</script>