<template>
    <div>
        <ul>
              <!-- <todo-list-item @delete-todo-item="$emit('delete-todo-item',$event)" v-for="todo in myData" :key="todo.id" :item="todo"></todo-list-item> -->
              <todo-list-item v-for="todo in provideData.todoList" :key="todo.id" :item="todo"></todo-list-item>

       </ul>

        

    </div>
</template>

<script>

import TodoListItem from "@/components/TodoListItem.vue";

export default {
   // props:["myData"], //bu şeklide bir syntax ya da object şeklinde
   inject:["provideData"], //dışarıdan bana provide edilmiş bilgi var
    // data() {
    //     return {
    //         myData: buna nasıl erişiyorsak propsa da aynı erişiyoruz.
    //     }
    // },
    // props:{
    //     myData:{
    //         type:String,
    //         required:false,
    //         default:""
    //     }
    // },
    components:{
        TodoListItem
    }
}


</script>