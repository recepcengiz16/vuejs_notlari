<template>
    <div>
        <ul>
            <!-- <li v-for="user in items" :key="user">{{user}}</li> -->
            <li v-for="user in userList" :key="user">{{user}}</li>
       </ul>
    </div>
</template>

<script>
    export default {
       // props:["items"],
        inject:["userList"]
    }

</script>