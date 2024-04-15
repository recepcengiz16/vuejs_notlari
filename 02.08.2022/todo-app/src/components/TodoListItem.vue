<template>
    <div>
        <li class="d-flex justify-content-between align-items-center m-3 bg-dark text-warning p-2 rounded-3">
                  <span>{{item.text}}</span>
                  <!-- <button @click="$emit('delete-todo-item',item)" class="btn btn-danger btn-sm">Sil </button>  -->
                  <button @click="deleteItem(item)" class="btn btn-danger btn-sm">Sil </button> 
        </li>
    </div>
</template>

<script>
    export default{
        props:["item"],
        inject:["deleteItem"]
    }

</script>