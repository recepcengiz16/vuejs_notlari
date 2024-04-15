<template> 
  <div class="container">
    <app-header></app-header>
    <appHeader></appHeader>
    <!-- Development serverda uygulamalarımızı geliştircez ama en sonunda bir tane script dosyası olucak elimizde -->

    <!-- neden development servera(app servera) ihtiyaç duyarız. Çünkü uygulama file protokolü çalıştırıyor. Normal web uygulamaları birçok özelliği barındıran http protokolü ile çalışıyor. Bizde bundan mahrum kalmamak adına development servera ihtiyaç duyarız. Bu sayede de gerçekçi ortamda test etme şansı bulmuş oluyoruz. 
      
    Development server(development workflow)
  
      Vue cli bize vue jsin temasını alıp server üzerinden getirir. 4 farklı kodlama ortamı sunuyor bize vue cli.
      
      1)Simple
      2)Webpack-simple
      3)Webpack
      4)Browserify / browserify-simple

      babel ES6'yı ES5 e çeviriyor ki diğer browserların da anlayacağı bir yapı olsun

      
  -->

    <h3>Bu benim ilk Cli uygulamam</h3>
    <counter-item></counter-item> <!-- bu şekilde de yazılabilir arasına tire konularak -->
    <CounterItem></CounterItem>
    <benim-sayacim></benim-sayacim>
   
  </div>

  <!-- 
  
  Bizim html kodlarımızı barındıran yer template. App vueda bir component. Çünkü templatei var, scripti var 
  Vue uzantılı dosyalar bir componenttir. SFC(Single File Component): yani tek sayfada ayarlıyorsun componentleri
  -->

  
</template>

<script>
    //import kablosuzkedi from '@/components/CounterItem.vue'
    import appHeader from "@/components/AppHeader.vue"
    import CounterItem from '@/components/CounterItem.vue' //şu yol üzerindeki componenti import et
    
    export default { //export default dediğimiz aslında bizim vue instance gibi, vue instance da bir objeydi ya burada da obje olarak 
        components:{
          //CounterItem:kablosuzkedi 
          //CounterItem:CounterItem  key value şeklinde yazıyor. Key değerini yukarıdaki template içerisinde component olarak kullanabilir hale geliyorum.

          CounterItem, // ya da bu şekilde yazınca yani key ve value aynı olunca arkada babel CounterItem:CounterItem yapıyor
          "benim-sayacim":CounterItem, //özel isim vermek istiyorsak 
          appHeader
        }
    }
</script>

<style>

</style>
