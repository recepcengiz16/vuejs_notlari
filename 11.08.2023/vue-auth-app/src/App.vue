<template>

  <component :is="$route.meta.componentLayout">
    <router-view></router-view>
  </component>

</template>

<script setup>

import { reactive,ref } from 'vue';
import axios from 'axios';
import MainLayout from './layouts/MainLayout.vue';
import AuthLayout from './layouts/AuthLayout.vue';


const signUp=()=>{
  axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD1HTQN-sJVTudOH8ylbMk880TU2hrxHms',
  {
    email:'recepcengiz_96@outlook.com',
    password:"12345678",
    returnSecureToken:true,
  }).then(response=>{
    console.log(response);
  });
};



</script>

<style>

#app{
  height: 100vh;
  display: flex;
  flex-direction: column;
}

</style>