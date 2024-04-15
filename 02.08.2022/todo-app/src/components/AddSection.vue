<template>
    <div>
         <label for="todoText"></label>
         <input v-model="todoText" @keydown.enter="addNewToDo(todoText)" type="text" id="todoText" placeholder="Bir şeyler yazınız" class="form-control"/>
    </div>
</template>

<script>

    export default {
        props:{
            addNewToDo:{
                type:Function,
                required:true
            }
        },
        data() {
            return {
                todoText:null
            }
        },
        methods: {
            // sendData(){
            //     this.$emit("add-todo",this.todoText);
            //     this.todoText=null;
            // }
        },
    }

</script>