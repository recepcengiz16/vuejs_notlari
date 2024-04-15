<template>
    <div>
        <!-- 
            <button @click="$emit('new-item',new Date().getTime())">Set Data</button> 
            
            this.$emit() de olur normal $emit() de ) 
        
        -->
        <button @click="newItem(new Date().getTime())">Data Gir</button>
    </div>
</template>

<script>

    export default {
        inject:["newItem"]
    }

</script>