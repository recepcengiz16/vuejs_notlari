<template>
    <div>
        <li class="d-flex justify-content-between align-items-center bg-dark text-primary p-2 rounded-3">
                  <span>{{todo.name}}</span>
                  
                  <button @click="deleteItem(todo)" class="btn btn-danger btn-sm">Sil </button> 
        </li>
    </div>
</template>


<script setup>

import { defineProps,inject } from 'vue';

//const item=defineProps(["todo"]);
defineProps({
    todo:Object
})
const deleteItem=inject("deleteTodo");

</script>