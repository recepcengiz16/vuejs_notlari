<template>
    <div>
        <div class="login_register_container">
            <h3 class="text-2xl text-center mb-3">Kayıt Ol</h3>
            <input v-model="userData.fullname" type="text" placeholder="Tam Ad" class="input mb-3" />
            <input v-model="userData.username" type="text" placeholder="Kullanıcı Adı" class="input mb-3" />
            <input v-model="userData.password" type="password" placeholder="Şifre" class="input mb-3" />
            <button class="default-button" @click="onSave">Kayıt ol</button>
            <span class="text-center mt-3 text-sm">
                Zaten Üyeyim,
                <router-link :to="{name:'LoginPage'}" class="text-red-900 hover:text-black">
                    Giriş yap!
                </router-link>
               
            </span>
        </div>
    </div>
</template>

<script>

import CryptoJs from "crypto-js";

export default {
    data() {
        return {
            userData:{
                fullname:null,
                username:null,
                password:null
            }
        }
    },
    methods: {
        onSave(){
            //const myPassword=this.userData.password;
           // const key="1235!?_*sfsdnQRt";
            const password=CryptoJs.HmacSHA1(this.userData.password,this.$store.getters._saltKey).toString();
            

            this.$appAxios.post("/users",{...this.userData,password}).then(response=>{
                console.log('response :>> ', response);
                this.$router.push({name:'LoginPage'});
            });

            // const decryptedPAssword=CryptoJs.AES.decrypt(password,key).toString(CryptoJs.enc.Utf8);
            // console.log(decryptedPAssword);

        }
    },
}
</script>