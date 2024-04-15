<template>
  <div class="pt-10">
    <div class="bg-gray-700 rounded-md shadow-md text-black p-5 w-96">
       <h3 class="text-center text-2xl">TodoList App</h3>
       <add-section :Addtodo="AddTodo"></add-section>
       <todo-list @delete-event="deleteItem" :todoList="todoList"></todo-list>
    </div>
  </div>
</template>

<script>
  
import AddSection from './components/addSection.vue';
import TodoList from './components/todoList.vue';
//import {ref,reactive} from "vue"; reactive ref gibi çalışır ama reaktif bir obje geri döner
//Ref birden fazla içerisine veri tipi kabul ediyorken reactive içerisine sadece obje kabul eder. Data gibi düşünebiliriz
import {ref,reactive} from "vue";
  export default {
    components:{
      AddSection,
      TodoList
    },
    setup(){
      const todoList=ref([]);
    

      const AddTodo=(todoText)=>{
          console.log(todoText);
          todoList.value.push({
              id:new Date().getTime(),
              title:todoText
          });
      };

      const deleteItem=(todo)=>{
          console.log(todo);
          todoList.value=todoList.value.filter(x=>x!==todo);
      };

      
      return {todoList, AddTodo,deleteItem}
    }

  }
</script>