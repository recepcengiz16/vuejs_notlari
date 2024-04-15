<template>
    <div>
        <button class="btn btn-success btn-sm" @click="$router.push({name:'NewBookmark'})">+ Yeni Ekle</button>
       <table class="table table-bordered m-3">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Başlık</th>
                    <th>URL</th>
                    <th>Açıklama</th>
                    <th>Sil</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="bookmark in bookmarkList" :key="bookmark.id">
                    <td>{{bookmark.id}}</td>
                    <td>{{bookmark.title}}</td>
                    <td><a :href="bookmark.url" target="_blank" >{{bookmark.url}}</a></td>
                    <td>{{bookmark.description}}</td>
                    <td>
                        <button @click="deleteBookmark(bookmark)" class="btn btn-danger btn-sm">Sil</button>
                    </td>
                </tr>
                
            </tbody>
       </table>
    </div>
</template>

<script>
export default {
    data(){
        return {
            bookmarkList:[]
        }
    },
    created(){
        this.$appAxios.get("/bookmarks").then(list_resposne=>{
            //console.log("liste",list_resposne);
            this.bookmarkList=list_resposne.data || [];
        })
    },
    methods:{
        deleteBookmark(item){
            this.$appAxios.delete(`/bookmarks/${item.id}`).then(resposne_data=>{
                console.log(resposne_data);
                if(resposne_data.status==200){
                    this.bookmarkList=this.bookmarkList.filter(x=>x.id!==item.id);
                }
            })
        }
    }
}

</script>