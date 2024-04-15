<template>
    <div>
        <h3 class="bg-primary text-white">Blue component</h3>
        <input type="text" class="form-control">
    </div>
</template>

<script>
 export default{
    // keep alive bilgisini tutmasını sağlıyor componentin. Ve keepaliveı kullanıca iki tane ayrı bir life cycle hook veriyor(mounted,created gibi). Normalde life cycleların bilgisini tutmuyor her değiştiğinde siliyor içeriği dynamic component. 
    activated() {
        //o komponent ekrana gelince
    },
    deactivated() {
        //o komponent ekrandan çıkınca
    },
 }

</script>