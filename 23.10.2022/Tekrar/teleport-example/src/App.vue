<template>
  <div class="m-5 p-5">

   
    <!-- 
      Teleport, bir bileşeni normal hiyerarşik DOM yapısından bağımsız bir şekilde, başka bir DOM düğümüne monte etmeyi sağlar. Böylece, bileşeni sayfanın herhangi bir yerine yerleştirebilirsiniz. Bu özellik, bir bileşeni açılır pencereler, modaller, uyarılar ve benzeri durumlar için faydalı kılar.

      Yani mesela biz bunu index.html de id si app olanın dışına koyarsak bizim style vs etkilenmez. Bu şekilde o modal diyelim istediğimiz gibi çağırabiliriz.
    -->
    <!-- idsi model area olan yerde gözükecek. model area da index html içine koyduk. Yeri önemli değil-->
    <teleport to='#modal-area'>
     
      Deneme


    </teleport>
  </div>
</template>

<script setup>



</script>