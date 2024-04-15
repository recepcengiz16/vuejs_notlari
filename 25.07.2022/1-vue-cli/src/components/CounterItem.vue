<template>
    <div>
        <div class="container-sm">
            <h3 class="mb-2"> {{counter}} </h3>
            <button @click="counter--" class="red sm"> - </button>
            <button @click="counter++" class="green sm"> + </button>
           
        </div>
    </div>
</template>

<script>
 export default { //js bölümünü dış dünyaya açabilmem için export default demem gerekli
    data() {
        return {
            counter:0
        }
    },
 }

</script>