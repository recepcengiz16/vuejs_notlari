<template>
  <div class="container">
      <h4 class="text-center my-5">Todo App</h4>

      <div>
        <AddSection :addTodo="addTodo"></AddSection>

        <ListSection></ListSection>

      </div>
  </div>
</template>

<script setup>

import { reactive,provide } from 'vue';

import AddSection from './components/AddSection.vue';
import ListSection from './components/ListSection.vue';

const listData=reactive({
    provideData:{
      todoList:[]
    }
});
  
provide("provideData",listData.provideData);

const addTodo=(todoText)=>{
  listData.provideData.todoList.push({id:new Date().getTime(),name:todoText});
 
};

const deleteTodo=(todo)=>{
  console.log(todo.id);
  listData.provideData.todoList = listData.provideData.todoList.filter(item=>item.id!=todo.id);
  
}
provide("deleteTodo",deleteTodo);

</script>