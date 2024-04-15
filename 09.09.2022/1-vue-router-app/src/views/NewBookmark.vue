<template>
    <div>
        <div class="input-group mb-3">           
            <input v-model="userData.title" type="text" class="form-control" placeholder="Başlık" aria-label="Başlık" aria-describedby="basic-addon1" id="title">
        </div>
        <div class="input-group mb-3">           
            <input v-model="userData.url" type="text" class="form-control" placeholder="URL" aria-label="URL" aria-describedby="basic-addon1" id="url">
        </div>
        <div class="input-group mb-3">           
            <textarea v-model="userData.description" type="text" class="form-control" placeholder="Açıklama" aria-label="Açıklama" aria-describedby="basic-addon1" id="description" style="resize:none;"></textarea>
        </div>

        <div class="d-flex justify-content-end align-items-center">
            <button class="btn btn-secondary btn-sm me-2" @click="$router.push({name:'HomePage'})">İptal</button>
            <button class="btn btn-success btn-sm" @click="onSave">Kaydet</button>
        </div>
       
    </div>
</template> 

<script>
    export default {
        data(){
            return {
                userData:{
                    title:null,
                    url:null,
                    description:null
                }
            }
        },
        methods:{
            onSave(){
                // db.json da bookmarks
                // console.log(this.userData);
                // this.$axios.post("http://localhost:3000/bookmarks",this.userData).then(save_response=>{
                //     console.log("Saved",save_response);
                // })
                  this.$appAxios.post("/bookmarks",this.userData).then(save_response=>{
                    console.log("Saved",save_response);
                 })
                this.resetData();
                //3 farklı yöntemi var yönlendirmede. 
                // 1) this.$router.push("/"); pathi veririz
                //2) this.$router.push({path:'/'}); //obje şeklinde pathi veririz. ya da alltaki gibi obje ile yolu veririz.
                this.$router.push({name:'HomePage'}); //bize routerdaki sayfalara gitmemizi sağlıyor.
            },
            resetData(){
                Object.keys(this.userData).forEach(key=>(this.userData[key]=null))
            }
        }
    }
</script>