<template>
    <div>
        <span class="d-flex justify-content-end text-success">{{itemCount}} adet todo var.</span>
    </div>
</template>

<script>

   export default {
        props:["itemCount"] //liste şeklinde alabiliriz ya da obje şeklinde
   }

</script>