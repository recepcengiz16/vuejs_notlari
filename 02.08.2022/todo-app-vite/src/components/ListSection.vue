<template>
    <div class="row justify-content-center">
        <div class="col-md-7">
            <TodoList></TodoList>
            <ResultBar :todoList="provideData.todoList"></ResultBar>
        </div>
    </div>
</template>

<script setup>

import { inject } from 'vue';
import TodoList from './TodoList.vue';
import ResultBar from "./ResultBar.vue";

const provideData=inject("provideData");

</script>