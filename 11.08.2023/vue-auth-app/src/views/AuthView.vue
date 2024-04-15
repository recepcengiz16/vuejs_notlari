<template>
    <form @submit.prevent="validateForm">
        <h1 class="justify-content-center d-flex mb-3">Giriş Yap</h1>   
        <div class="mb-2">
            <label for="exampleInputEmail1" class="form-label">Email</label>
            <input type="email" v-model="user.email" class="form-control bg-dark text-white" 
            :class="errors.email?'is-invalid':''"
            id="exampleInputEmail1" aria-describedby="emailHelp">
            
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Şifre</label>
            <input type="password" v-model="user.password" class="form-control bg-dark text-white"
            :class="errors.password?'is-invalid':''"
            id="exampleInputPassword1">
        </div>
        
        <div class="d-flex justify-content-center">
            <button type="submit" class="btn btn-primary my-3">Giriş Yap</button>
        </div>

        <div class="d-flex justify-content-center">
            <router-link to="/register" class="link-info">Kayıt Ol</router-link>
        </div>
</form>
</template>

<script setup>
import { reactive } from 'vue';
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import axios from 'axios';

const store=useStore();
const router=useRouter();


    const errors=reactive({
        email:false,
        password:false
    });

    const user=reactive({
        email:"",
        password:"",
        returnSecureToken:true
    });

    const validateForm=()=>{
        if (user.password.length<8) {
            errors.password=true;
        }

        signIn();
    };

    const signIn=()=>{
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD1HTQN-sJVTudOH8ylbMk880TU2hrxHms',
        {
            email:user.email,
            password:user.password,
            returnSecureToken:true,
        }).then(response=>{

            

            console.log("response",response);
            
            store.commit("setUser",response.data);

            user.email='';
            user.password='';

            router.push({name:'HomePage'});
        });
    };
</script>