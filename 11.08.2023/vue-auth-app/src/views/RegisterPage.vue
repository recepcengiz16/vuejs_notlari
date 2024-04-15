<template>
    <form @submit.prevent="validateForm">
        <div class="mb-2">
            <h1 class="justify-content-center d-flex mb-3">Kayıt Ol</h1>   
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
            <button type="submit" class="btn btn-primary my-3">Kayıt Ol</button>
        </div>

        <div class="d-flex justify-content-center">
            <router-link to="/login" class="link-info">Zaten Üyeyim , Giriş Yap</router-link>
        </div>
</form>
</template>

<script setup>
import { reactive } from 'vue';

    const errors=reactive({
        email:false,
        password:false
    });

    const user=reactive({
        email:"",
        password:""
    });

    const validateForm=()=>{
        if (user.password.length<8) {
            errors.password=true;
        }
    };
</script>