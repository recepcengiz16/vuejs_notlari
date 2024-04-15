<template>
  <div class="container">
    <div class="row justify-content-center align-items-center my-4">
        <div class="col-md-6 col-md-offset-3 text-center">
          <h3>Animation ve Transition</h3>
          <hr>

          <!-- animate.css sayfası var oraya bakabilirsin. orada da hazır animeler var. index tarafında link vererek eklemen lazım. -->

           <!-- vue js tarafından sunulan bie elementtir. Animasyon vermek istediğimiz elementleri bu tagin içinde yazarız. Transition sadece bir element üzerinde kullanılır. Birden fazla element içeriyorsa transition-group olan elementi kullanıyoruz. -->
           <button class="btn btn-primary" @click="show=!show">Kutuyu Göster/Gizle</button>
           <br> <br>
           <transition name="fade">
            
            <div class="alert alert-success" v-if="show">Bu bir alert kutusudur</div>
            <!-- <div class="alert alert-success" v-else>Bu bir alert kutusudur</div>  -->
            <!-- burada sadece bir element göztermek durumunda olduğu için yani ya v-if ya da else durumunu gösteredceği için vue js bunu anlıyor ve sıkıntı çıkarmıyor. -->
          </transition>

          <transition name="slide" appear> <!-- appear vue js in bize sunduğu attr. sayfa onload olduğunda aksiyonu alacak demiş oluyoruz. -->           
            <div class="alert alert-warning" v-if="show">Bu bir alert kutusudur</div>
          </transition>

          <transition name="fade" mode="out-in"> <!-- mode ile beraber bir element girip diğeri çıkarken atlamalar olabiliyor. Bunu engellemek için mode attr. var vue js de. Diyoruz ki ilk önce out olsun sonra girsin diğeri ekrana. in-out da yapabilirsin -->
            <div class="alert alert-success" v-if="show">Bu bir alert kutusudur</div>
            <div class="alert alert-danger" v-else>Bu bir alert kutusudur</div>
          </transition>

          <!-- <transition @before-enter="beforeEnter" :css="false">
            
            burada mesela js ile animation yapmaya çalışıyoruz. css kullanmak istemezsek eğer css i false yapmamız lazım yoksa gidip enter-active leave-active gibi css kodlarını arıyor,daha fazla iş yapmış oluyor. bunu engellemek için css false yapıyoruz. 
          
          </transition> -->

          <h3>Dinamik komponentler arasında geçiş</h3>

          <button class="btn btn-primary me-2" @click="activeComponent='appHome'">Home</button>
          <button class="btn btn-danger" @click="activeComponent='appPost'">Post</button>
          <br><br>
          <transition name="fade" mode="out-in">
            <component :is="activeComponent"></component>
          </transition>

          <hr>
          <button class="btn btn-success" @click="addNewItem">Yeni Eleman Ekle</button>
          <br><br>
          <ul class="list-group">
           <transition-group name="slide">
            <li v-for="(number,index) in numberList" :key="index" class="list-group-item" @click="removeItem(index)">Number: {{number}}</li>
           </transition-group>
           
          </ul>


        </div>
    </div>  
  </div>
</template>

<script>
import appHome from "@/components/Home.vue"; 
import appPost from "@/components/Post.vue"; 
  export default {
    components:{
      appHome,
      appPost
    },
    data() {
        return {
          show:false,
          activeComponent:"appPost",
          numberList:[1,2,3,4,5]
        }
    },
    methods: {
      addNewItem(){
        const position=Math.floor(Math.random()*this.numberList.length);
        this.numberList.splice(position,0,this.numberList.length+1);
      },
      removeItem(index){
        this.numberList.splice(index,1);
      }
    },
  }

</script>

<style>
/*
  Burada bizden 4 tane class bekliyor. Yukarıda transitiona Nameini veriyoruz ve o name e göre burada 4 tane class oluşturmamız gerekli . Bunlar  -(name-enter, name-enter-active, name-leave, name-leave-avtive)
*/

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in 0.5s;
}
.slide-leave-active {
  animation: slide-in 0.5s reverse;
  position: absolute; /* ayrılırken diğer elementler bu elementin üzerine çıkabilecekler */
}
@keyframes slide-in {  /* slideın gireceği durumdan slide out durumu da var o da ekrandan gideceği durumu  */ 
  from{
    /* şu durumdan 20px aşağıdan */
    transform: translateY(20px); 
  }
  to{
    /* şu duruma gelecek */
    transform: translateY(0px);
  }
}

.slide-move{
  /*
    transition-group taraından elemanlar arasında herhangi birinin yerinin oynaması durumunda ortaya çıkan bir sınıf.
  */

  transition: transform 1;
}


</style>