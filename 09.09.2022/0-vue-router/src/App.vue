<template>
  <div>
      <!--

        Lazy load hangi komponent hangi zamanda kullanılıyorsa yüklenilmesinin sağlıyor. Yoksa bütün hepsinin birden yüklemeye çalışıyor projeye. Bu da anasunı ağlatır sistemin.

         vue router sayfalar arasında geçiş yapmamızı sağlayan vue js paketidir. Views klasörünü biz oluşturduk elle yeni klasör diye. Standart kurduğumuzda views klasörü oluşturur. Biz burda daha kurulum aşamasında elle yapmayı seçtik. Component aslında bir sayfadır. yani sfc. 
      
        Bizim sfc dediğimiz tek sayfa aslında yapılan uygulamalar. Tek bir sayfa var diğer sayfalarda bu sayfaya yükleniyor yani. 
      -->

      <!--
         <a href="/" class="btn btn-success">Ana Sayfa</a> &nbsp;
         <a href="/Hakkimda" class="btn btn-warning">Hakkımda</a> 
      -->  

      <router-link exact to="/" class="nav-link" active-class="active"> 
        <!--
           view router la gelen bir component daha, sayfa yenilenmeden geçiş yapmamızı sağlıyor. Spa uygulamalarda routelar arasında dolaşmamızı sağlıyor. İlle de app.vue içinde olmasına gerek yok. Bir componentin içinde de olabilir.
                    
           exact =>  active class normalde hangisi ise onu aktif yapıyor. Ama to dediğimizde o her route da "/" var. Bu yüzden gidip bunu da aktif yapmaya çalışabilir. o yüzden problem çıkaran bu arkadaş oluğu için sadece buna exact yazıyoruz.
          -->
          Ana Sayfa
      </router-link>    
      
      <router-link to="/Hakkimda" class="nav-link" active-class="active">
          Hakkımızda
      </router-link>

       <router-link to="/Detaylar" class="nav-link" active-class="active">
          Detaylar
      </router-link>

      <ul>
        <li>
          <router-link to="/" class="nav-link" active-class="active">
          
             Deneme
          </router-link>
        </li>
      </ul>


      <!-- <router-view name="hedaer-top"></router-view>  named router view 
        router da da 
      
      -->
      
      
      
      
      <router-view></router-view> <!-- Vue routerı yükleyince otomatik gelen bir componenttir. Router a denk gelen componenti load ettikten sonra burada göstermemizi sağlıyor. Yani linke göre o component yüklemiyor ya burada da gözükmesini sağlamış oluyoruz.  -->
     
  </div>

</template>

<style>

.nav-link{
  padding:5px 10px;
  text-decoration: none;
  border: 1px solid #fa6558;
  color:#ff8568;
  display:inline-block;
  margin:5px 10px;
  width:100px;
  height: 50px;
}

.active{
  background-color: #fa6558;
  color:#fff;
}
</style>