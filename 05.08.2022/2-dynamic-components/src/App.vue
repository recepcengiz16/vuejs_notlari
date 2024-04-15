<template>
  <div class="container m-5">

      <div class="d-flex justify-content-between align-items-center m-5">
          <button class="btn btn-danger" @click="activeComponent='Red'">Red</button>
          <button class="btn btn-primary" @click="activeComponent='Blue'">Blue</button>
          <button class="btn btn-success" @click="activeComponent='Green'">Green</button>
          
      </div>

      <!-- npm de çalışan terminalde işlemi kesip başka klasöre geçmek için ctrl + shift + ^ + C -->

      <!-- <Red v-if="activeComponent=='Red'" class="mb-2"/>
      <Green v-if="activeComponent=='Green'" class="mb-2"></Green>
      <Blue v-if="activeComponent=='Blue'" class="mb-2"></Blue> -->


     
      <!-- Dynamic component: Değişince bir önceki datalara sahip olanı siliyor yeniden oluşturuyor.  -->
     <keep-alive> <!--  bilgisini tutmasını sağlıyor componentin. Tekrardan render edilmesini engellemiş oluyoruz. Ve bunu kullanıca iki tane ayrı bir life cycle hook veriyor. Normalde life cycleları tutmuyor.  -->
           <component :is="activeComponent" msg="Red component">
                <h3>Merhaba</h3>

          </component> <!-- Buradaki var olan component şudur. datanın içindeki component adı neyse. -->
     </keep-alive>
  </div>
</template>

<script>  
import Red from '@/components/Red.vue'
import Green from '@/components/Green.vue'
import Blue from '@/components/Blue.vue'
export default {
    components:{
      Red,
      Green,
      Blue
    },
    data() {
      return {
        activeComponent:"Red"  
      }
    },
}

</script>