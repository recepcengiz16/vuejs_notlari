<template>
  <div>
    <span v-if="err">{{ err }}</span> <!-- suspense yüklenemsinde hata olursa bu gözükecek -->
    <Suspense v-else>
      <!-- Suspense içerisinde asenkron istek barındıran componentler var. Bunun ekrana basılmasınu bu istek çözülüp tamamlandıktan sonra yap. Bu sayede sayfanın yüklenme süresini azaltmış olursun. -->

      <template #default> <!-- asenkron istek olan componenti bu defaulta yazıyorsun. -->       
        <div>
          <!-- birden fazla root element olduğu için bunun çalışması için bir root element( burada div ) içine alman lazım -->

          <Users></Users>
          <hr />
          <Todos></Todos>

        </div>
      </template>

      <template #fallback> <!-- asenkron componentin içindeki işlemlerin bitip yüklenmesi olana kadar fallback isimli template i  göster. -->
        <div>
          Loading...
        </div>     
      </template>

    </Suspense>

    <!-- 
      <hr>
    <Users></Users>
   -->
  </div>
</template>

<script setup>
 /*
 
  Asenkron komponentler, büyük uygulamaların başlangıçta tüm bileşenleri yüklemesi yerine, sadece ihtiyaç duyulan komponentlerin istendiği zaman yüklenmesini sağlar.

  Asenkron komponentlerin bazı faydaları şunlardır:

İlk sayfa yükleme süresini azaltma: Büyük Vue.js uygulamalarında, tüm bileşenleri anında yüklemek sayfa yükleme süresini uzatabilir. Asenkron komponentler sayesinde, sadece gerekli bileşenlerin yüklenmesi sayfa yükleme süresini azaltabilir ve kullanıcı deneyimini iyileştirir.

Daha hızlı gezinme: Kullanıcılar, asenkron yüklenen komponentler sayesinde sayfalar arasında daha hızlı geçiş yapabilirler. İlgili bileşenler yalnızca sayfa geçişleri sırasında yüklenir, bu da daha akıcı bir gezinme deneyimi sunar.

Performans iyileştirmeleri: İlk yükleme sırasında tüm bileşenlerin yüklenmemesi, sayfa boyutunu azaltır ve tarayıcı performansını artırır. Böylece, sayfada daha hızlı tepki süreleri elde edilebilir.
 
 */

//import Users from './components/Users.vue';
//import Todos from './components/Todos.vue'; //bu normal statik component tanımı, içinde asenkron işlem olmasa tanımı böyle yap.

  import { onErrorCaptured,defineAsyncComponent, ref } from 'vue';
  const err=ref(null);
  const Todos =defineAsyncComponent(()=>import("./components/Todos.vue")); //async componenti bu şekilde tanımlayıp değişken içine alırız.
  const Users =defineAsyncComponent(()=>import("./components/Users.vue")); 
  onErrorCaptured((e)=>{
    // suspense ile alakalı hata ortaya çıkınca , bu metot çalışır.

    console.log("Hata",e.message);
    err.value=e.message;
    return true;
  })



</script>