<template>
    <div>
        <TodoListItem @delete-event="$emit('delete-event',$event)" v-for="todo in todoList" :key="todo.id" :todo="todo"></TodoListItem>
        <Summary :todoList="todoList"></Summary>
      
    </div>
</template>

<script>

import TodoListItem from './TodoListItem.vue';
import Summary from "./Summary.vue"
import {computed} from "vue";

export default {
    components:{
        TodoListItem,
        Summary
    },
    props:{
        todoList:Array
    },
    setup(props,context) {
        //props ile propslara erişiriz , 2. parametre de context alır.

        const todoLength = computed(()=>{
            return props.todoList.length;
        })
       
        return {
            todoLength
        }
    }
}
</script>