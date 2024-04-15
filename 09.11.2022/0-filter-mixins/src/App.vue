<template>
    <div>
        <!-- Filter bizim datada propoerty içinde bulunan bir veriyi değiştirmemizi sağlar. Verinin kenidisini değil de kullanıcının gördüğü veriyi değiştirir. Verilerin kullanıcıya büyük karakter ile gözükmesi ya da okunabilir bir tarih formatında gözükmesi gibi-->

        <!-- 
            <p>{{message | toUpperCase }}</p>  
            | dediğimiz(message ile uppercase arasındaki) pipe oluyor. bunu görünce message ı uppercase içine atıyor. uppercase value ile alıyor işleme sokuyor ve sonucu geridönüyor.
        
            Mixins propertyleri global olarak bir yerde tanımlayıp tek bir yerden kontrol etmemizi sağlıyor.
            İlk önce mixin life cycle ları çalışır. Daha sonra componentin çalışır. Son söz componentindir.
        -->
         
        <input type="text" v-model="searchText">
        <ul>
            <li v-for="product in filtered" :key="product">{{product}}</li>
        </ul>
        
    </div>
</template>

<script>

import {product_mixin} from "../product_mixin";

export default {
   data() {
    return {
        message:"Selamlar nasıl gidiyor hayat gardaşım?"
    }
   },
   mixins:[product_mixin],
   filters:{//filter aslında bir fonks.
    toUpperCase(value){
        //value değiştirmek istediğimiz değer. Bize bir sonuç geri döndürür. Yani yapmak istediğimiz şeyi döner
        return value.toUpperCase(); 
        
    }
   }
};

</script>


