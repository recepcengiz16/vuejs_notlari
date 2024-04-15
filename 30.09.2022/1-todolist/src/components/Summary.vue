<template>
    <div>
            <div class="mr-3 text-green-400">{{completed}} adet tamamlanmışlar</div>
            <div class="text-red-400"> {{unCompleted}} adet tamamlanmamışlar</div>
    </div>
</template>

<script>
    import {computed} from "vue";
    export default {
        props:{
            todoList:Array
        },
        setup(props){
            const completed=computed(()=>props.todoList.filter(x=>x.completed).length);
            const unCompleted=computed(()=>props.todoList.filter(x=>!x.completed).length);

            return {completed,unCompleted}
        }
    }
</script>