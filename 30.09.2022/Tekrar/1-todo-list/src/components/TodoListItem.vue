<template>
    <div>
        <section class="mt-1">
            <div class="d-flex justify-content-between bg-secondary px-2 p-1 rounded-3">
                <label :for="`completed_${todo.id}`">
                    <input v-model="todo.completed" type="checkbox" :id="`completed_${todo.id}`" class="me-2"/>
                    <span class="text-white fs-5">{{ todo.title }}</span>
                </label>
                <button @click="deleteItem" class="btn btn-danger btn-sm">Sil</button>
            </div>
        </section>

    </div>
</template>

<script>
export default {
    props:{
        todo:Object
    },setup(props,context) {
        const deleteItem=()=>{
            context.emit("delete-event",props.todo);
        };

        return {
            deleteItem
        }
    }
}
</script>