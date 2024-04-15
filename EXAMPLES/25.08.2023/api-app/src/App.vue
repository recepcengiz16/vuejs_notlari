<template>
  <div>
    Deneme
  </div>
</template>

<script setup>
import { inject, ref } from 'vue';

const list=ref([]);
const appAxios= inject("appAxios");

appAxios.get("Example/SayHello").then(response=>{
  console.log(response);
});

</script>