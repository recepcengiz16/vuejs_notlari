<template>
    <div class="my-2 d-flex justify-content-between">
        <span class="text-success">Görev sayısı:  {{ len }} </span>
    </div>
</template>


<script setup>
import { computed, inject } from 'vue';


const provideData=inject("provideData");

const len=computed(()=>provideData.todoList?.length || 0);
</script>