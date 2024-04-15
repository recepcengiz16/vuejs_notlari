<template>
  <div class="container">
  <!-- vue router uygulamamızda sayfalar arasında geçiş yapmamızı sağlayan pakettir. Bunu sayfa yenilenmeden yapar --> 
    
    
      <div class="row justify-content-center bg-dark my-2 rounded">
        <div class="my-1 col">
          <router-link exact to="/" class="btn btn-sm btn-success my-5">
        <!-- Link oluşturmamızı sağlıyor. to ile birlikte nereye gidecek. -->
            Ana Sayfa
          </router-link>

          <router-link to="/hakkimda" class="btn btn-sm btn-danger my-5">
            Hakkımda
          </router-link>

          <router-link to="/detaylar" class="btn btn-sm btn-warning my-5">
            Detaylar
          </router-link>
      
      </div>
      </div>

  <!-- router view: Vue Router tarafından eşleşen rotaya bağlı olarak görüntülenecek bileşenin içeriğini yerleştirecektir. İçine yorum da olsa bir şey yazma. Ne yazarsan içine içerisinde olan sayfayı eziyor, yorum dahi yazma. Aslında c# taki renderbody gibi düşün -->
  <router-view>
    
  </router-view>
  </div>
</template>


<script>
export default {
  
}
</script>