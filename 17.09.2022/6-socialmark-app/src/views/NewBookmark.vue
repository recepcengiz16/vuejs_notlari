<template>
     <div class="login_register_container">
      <h3 class="text-2xl text-center mb-3">Yeni Ekle</h3>
      <input ref="title" v-model="userData.title" type="text" placeholder="Başlık" class="input mb-3" />
      <input v-model="userData.url" type="text" placeholder="URL" class="input mb-3" />
      <select v-model="userData.categoryId" class="input mb-3">
        <option disabled value="" selected>Kategori</option>
        <option v-for="category in categoryList" :key="category.id" :value="category.id">{{category.name}}</option>
        
      </select>
      <textarea v-model="userData.description" placeholder="Açıklama" class="input mb-3" cols="30" rows="10"></textarea>
      <div class="flex items-center justify-end gap-x-1">
        <button @click="$router.push({name:'HomePage'})" class="secondary-button">İptal</button>
        <button @click="onSave" class="default-button">Kaydet</button>
      </div>
    </div>
</template>


<script>
import { mapGetters } from 'vuex';

  export default {
    data() {
      return {
        categoryList:[],
        userData:{
          title:null,
          url:null,
          categoryId:null,
          description:null
        }
      }
    },

    mounted(){
      this.$appAxios.get("/categories").then(response_data=>{
       // console.log(response_data);
        console.log(this.$refs.title); //ref ile elemente erişebilip seçebiliriz. yukarıda ref ile elemnte isim verdik


        this.categoryList=response_data?.data || [];
        //

      });
    },
    methods:{
      onSave(){
        console.log(this.userData);
        console.log(this._getCurrentUser);

        // const saveData={
        //   ...this.userData,
        //   userId:this._getCurrentUser?.id,
        //   created_at:new Date()
        // };

        this.$appAxios.post("/bookmarks").then(resposne_data=>{
          console.log(response_data);
          this.userData={
          title:null,
          url:null,
          categoryId:null,
          description:null
        }
        this.$router.push({name:"HomePage"});
        })
      }
    },
    computed: {
      ...mapGetters(["_getCurrentUser"])
    },
  }

</script>