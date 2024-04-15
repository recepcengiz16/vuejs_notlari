<template>
    <div>
            <div class="flex justify-between items-center">
                <label :for="`completed_${todo.id}`">
                    <input type="checkbox" v-model="todo.completed" :id="`completed_${todo.id}`"> 
                    <span class="mr-3">{{todo.title}}</span>
                </label>
                <button @click="deleteItem" class="bg-red-500">Sil</button>
            </div>
    </div>
</template>

<script>
    export default {
        props:{
            todo:Object,
        },
        setup(props,context) {
           const deleteItem=()=>{
            context.emit("delete-event",props.todo);
           };

           return {deleteItem}
        }
    }
</script>