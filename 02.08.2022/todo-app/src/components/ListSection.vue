<template>
    <div>
         <!-- <todo-list @delete-todo-item="$emit('delete-todo-item',$event)" :myData="todoList"></todo-list> todolist componentine gönderiyoruz. -->
        <todo-list></todo-list>
        <result-bar :itemCount="provideData.todoList.length"></result-bar>
    </div>
</template>


<script> 
     import TodoList from "@/components/TodoList";
     import ResultBar from "@/components/ResultBar";
    export default{
        inject:["provideData"],
        props:{
            // todoList:{
            //     type:Array,
            //     required:true
            // }
        },
        components:{
            TodoList,
            ResultBar
        }
    }

</script>