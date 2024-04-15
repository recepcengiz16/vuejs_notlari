<template>
    <div>
        <section class="mt-4">
           <todo-list-item @delete-event="$emit('delete-event',$event)" v-for="todo in todoList" :key="todo.id" :todo="todo"></todo-list-item>
            <small>{{amount}} adet item vardır</small>
           <Summary :todoList="todoList"></Summary>
       </section>
    </div>
</template>

<script>
    import TodoListItem from './todoListItem.vue';
    import Summary from './Summary.vue';
    import { computed } from 'vue';
    export default {
        components:{
                TodoListItem,
                Summary
            },
        props:{
            todoList:Array,

        },
        setup(props) {
            //props propsun içindeki verilere erişmek için
            const amount= computed(()=>{
                return props.todoList.length;
            })

            return {amount};
        }
    }

</script>