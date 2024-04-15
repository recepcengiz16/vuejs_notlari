<template>
    <div>
        <ul class="list-group my-5">
            <TodoListItem 
            class="list-group-item my-1"
            v-for="todo in provideData.todoList" 
            :key="todo.id"
            :todo="todo">
            </TodoListItem>
        </ul>
    </div>
</template>

<script setup>
import { inject } from 'vue';
import TodoListItem from './TodoListItem.vue';

const provideData=inject("provideData");

</script>