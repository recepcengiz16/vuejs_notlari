<template>
    <div class="my-2 d-flex justify-content-between">
        <span class="text-success">Görev sayısı:  {{ len }} </span>
        <span class="text-success">Görev sayısı:  {{ length_ }} </span>
    </div>
</template>


<script setup>
import { computed, inject, defineProps } from 'vue';

defineProps({
    todoList:{
        type:Array
    }
})
const length_= todoList.length || 0;

const provideData=inject("provideData");
const len=computed(()=>provideData.todoList?.length || 0);

</script>