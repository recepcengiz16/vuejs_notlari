<template>
    <div>
        <div class="d-flex justify-content-between">
            <small class="text-success">Tamamlanmışlar sayısı:{{ completed }}</small>
            <small class="text-danger">Tamamlanmamışlar sayısı:{{ unCompleted }}</small>
        </div>
    </div>
</template>

<script>

import {computed} from "vue";

export default {
    props:{
        todoList:Array
    },
    setup(props) {
        const completed=computed(()=>{
            return props.todoList.filter(x=> x.completed).length;   
        });

        const unCompleted=computed(()=>{
            return props.todoList.filter(x=> !x.completed).length;   
        });

        return {completed,unCompleted}
    }
}
</script>