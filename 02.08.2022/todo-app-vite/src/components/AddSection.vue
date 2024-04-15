<template>
    <div class="row justify-content-center align-items-center">
        <div class="col-md-6">
            <input type="text" v-model="textData" @keydown.enter="addTodo(textData)" class="form-control"/>
        </div>
    </div>
</template>

<script setup>

import { ref,defineProps } from 'vue';

const textData=ref("");

defineProps({
    addTodo:{
        type:Function,
        required:true
    }
})

</script>