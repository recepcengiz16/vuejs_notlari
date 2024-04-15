<template>
     <div class="login_register_container">
      <h3 class="text-2xl text-center mb-3">Yeni Ekle</h3>
      <input ref="title" v-model="userData.title" type="text" placeholder="Başlık" class="input mb-3" />
      <input v-model="userData.url" type="text" placeholder="URL" class="input mb-3" />
      <select v-model="userData.categoryId" class="input mb-3">
        <option disabled value="" selected>Kategori</option>
        <option v-for="category in categoryList" :key="category.id" :value="category.id">{{ category.name }}</option>
        
      </select>
      <textarea v-model="userData.description" placeholder="Açıklama" class="input mb-3" cols="30" rows="10"></textarea>
      <div class="flex items-center justify-end gap-x-1">
        <button class="secondary-button" @click="$router.push({name:'HomePage'})">İptal</button>
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

    mounted() {
      this.$appAxios.get("/categories").then(response=>{
        this.categoryList=response?.data;
      });

      
      setTimeout(() => {
        console.log(this.$refs.title); //bazen refs e erişemiyoruz mounted olduğunda bunu gidermek için ya setTimeout ile erişsin diyorsun. ya da alttaki $nextTick gibi bir çözüm sunuyor bize vue js. Ama bazen nexttick de işe yaramıyor o zaman en sağlıklısı setTimeout ile yapmak.
      }, 1000);

      this.$nextTick(()=>{
        console.log(this.$refs.title); // dinamik yapıda bir elemente queryselector yapıp yapıp erişebilmek her zaman mümkün olmayabiliyor. O yüzden dinamik yapılarda ref ile isimlendirip erişebilmek daha iyi .
      });


    },

    methods: {
      onSave(){
        console.log(this._getCurrentUser);
        const saveData={
          ...this.userData,
          userId:this._getCurrentUser?.id,
          created_date:new Date()
        };

        this.$appAxios.post("/bookmarks",saveData).then(response=>{
          console.log(response);
          Object.keys(this.userData)?.forEach(field=>this.userData[field]=null);
          this.$socket.emit("NEW_BOOKMARK_EVENT",{
            ...response.data,
            user:this._getCurrentUser,
            category:this.categoryList.filter(x=>x.id==saveData.categoryId)
          })
          this.$router.push({name:"HomePage"});
        });
      }
    },

    computed: {
      ...mapGetters(["_getCurrentUser"])
    },
}
</script>