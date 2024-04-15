<template>
    <div class="container justify-content-center align-items-center">
        <table class="table table-bordered text-center m-3">
           <tr class="bg-dark text-white">
              <td>ID</td>
              <td>E mail</td>
              <td>First Name</td>
              <td>Last Name</td>
              <td>Profile Image</td>
              
           </tr>

            <tr v-for="item in itemList" :key="item.id">
                <td>{{item.id}}</td>
                <td>{{item.email}}</td>
                <td>{{item.first_name}}</td>
                <td>{{item.last_name}}</td>
                <td><img :src="item.avatar" /></td>
            </tr>
           
        </table>
    </div>
</template>

<script>

import axios from "axios";

export default {
   data(){
    return {
      itemList:[]
    }
   },
   mounted(){
     axios.get("https://reqres.in/api/users?page=1").then(response_data=>{
        console.log(response_data.data);
        this.itemList=response_data.data.data || [];
     })
   }
}

</script>