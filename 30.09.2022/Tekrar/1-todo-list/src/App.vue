<template>
  <div class="container my-5">
      <div class="row justify-content-center align-items-center my-5 p-5">
        <div class="col-md-8 shadow">
            <h3 class="text-center">TodoList</h3>

            <AddSection :AddTodo="addTodo"></AddSection>  
            <TodoList @delete-event="deleteItem" :todoList="todoList"></TodoList>
            

        </div>
      </div>
  </div>
</template>

<script>
import {ref,reactive} from "vue"; // ref gibi çalışır ama bize reaktif bir obje geri döner. ref içerisine birden fazla veri tip kabul ediyorken reactive içine sadece obje kabul eder.

import AddSection from './components/AddSection.vue';
import TodoList from './components/TodoList.vue';

console.log(reactive);

export default {
    components:{
      AddSection,
      TodoList
    },
    setup() {
      const todoList=ref([]);
      const addTodo=(todoText) =>{
        
        todoList.value.push({
          id:new Date().getTime(),
          title:todoText
        });
       
      };

      const deleteItem=(todo)=>{
        console.log("Todo",todo);
         todoList.value=todoList.value.filter((x)=>x.id!=todo.id);
      }

      return {
        todoList,
        addTodo,
        deleteItem
      }
    }
}
</script>