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
        <router-link :to="{name:'LoginPage'}" class="text-red-900 hover:text-black">Giriş Yap!</router-link>
        
      </span>
    </div>
    </div>
</template>

<script>

  import cryptoJS from "crypto-js"

  export default {
    data(){
      return{
          userData:{
            username:null,
            fullname:null,
            password:null
          }
      }
    },
    methods:{
      onSave(){
        const password=this.userData.password;

     
        const cryptedPassword=cryptoJS.HmacSHA1(password,this.$store.getters._saltKey).toString(); //birçok şifreleme yönteminden biri aes. verilen keye göre şifreler
        
        this.$appAxios.post("/users",{...this.userData,password:cryptedPassword}).then(response_data=>{
          console.log(response_data);
          this.$router.push({name:"HomePage"})
        }); //userdatanın içindeki bilgileri al. passwordu de ez
        
        const decryptedPassword=cryptoJS.AES.decrypt(cryptedPassword,this.$store.getters._saltKey).toString(cryptoJS.enc.Utf8); // şifrelenmiş veriyi çözen kod

        console.log(cryptedPassword);
        console.log(decryptedPassword);
      }
    }
  }
</script>