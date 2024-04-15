<template>
  <div class="container my-5">
      <table class="table text-center">
        <thead class="bg-dark text-white">
          <tr>
            <th>Id</th>
            <th>Ad Soyad</th>
            <th>Email</th>
            <th>Kullanıcı Adı</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in userList" :key="item.LogicalRef">
              <td>{{ item.logicalRef }}</td>
              <td>{{ item.fullname }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.username }}</td>
              <td> <button @click="deleteItem(item.logicalRef)" class="btn btn-sm btn-danger">Sil</button> </td>
          </tr>
        </tbody>
      </table>


      <div class="my-5 form-group">
          <input type="text" v-model="firstName" class="form-control my-2" placeholder="Ad"/>
          <input type="text" v-model="lastName" class="form-control my-2"  placeholder="Soyad"/>
          <input type="text" v-model="email" class="form-control my-2" placeholder="Email"/>
          <input type="text" v-model="username" class="form-control my-2" placeholder="Kullanıcı Adı"/>
          <button @click="addToList" class="btn btn-success">Ekle</button>
      </div>

  </div>
</template>

<script>

import axios from "axios"

export default {
   data() {
    return {
      userList:[],
      firstName:"",
      lastName:"",
      username:"",
      email:""
    }
   },
   methods: {
      addToList(){
        const obj={
          fullname:this.firstName +" " + this.lastName,
          username:this.username,
          email:this.email
        };

        axios.post("http://localhost:1641/api/users",obj).then(response=>{
            console.log(response);
            this.userList.push(response.data);
        });
      },
      deleteItem(id){
        console.log(id);
        axios.delete(`http://localhost:1641/api/users/${id}`).then(response=>{
          console.log(response);
          this.userList = this.userList.filter(x=>x.logicalRef!=id);
        });
      }
   },
   mounted() {
      axios.get('http://localhost:1641/api/users').then(response=>{
        //console.log(response);
        this.userList=response.data;
      })
   },
}

</script>