<template>
  <div>
    <!-- 
      composition api reaktifliği senin belirlemeni sağlıyor. istediklerin reaktif olsun diyor 30.000 verili sayfada iş yükünü azaltmak için. Diğer bir faydası da kodları paylaşıp sayfalara ayırıp onunla alakalı kodları ayrı sayfada tutmuş oluyorsun. Bu şekilde bu değişken şununla alakalı diye düşünmüyorsun.

      APplication seviyesinde kullanacağım componentlerin başına app yazıyorum.

      socket io da şu http protokolü ile değil de web socket üzerinden servera bağlanıyor. Canlı olarak verileri görmemizi ve işlem yapmamızı sağlıyor.

      Biz clientlarla sunucuya bağlandığımızda sunucunun elinde oluyor. Mesela sen bir web socket ile mesajlaşma uygulaması yazabilirsin. Whatsapptaki grup mesajlarını düşün sen mesaj atnca sunucu gruptaki diğer üyelere de bilirim gönderiyor.
     -->
     <router-view></router-view>
  </div>
</template>