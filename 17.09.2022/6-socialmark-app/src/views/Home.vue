<template>
    <div>
        <app-header></app-header>
        <div class="flex flex-row">
            <Sidebar @category-changed="updateBookmarkList"></Sidebar>
            
            <app-bookmark-list v-if="bookmarkList.length > 0" :items="bookmarkList"></app-bookmark-list>
            <div v-else>
                Henüz eklenmiş bir bookmark yoktur.
            </div>
        </div>
    </div>
</template>

<script>
   
import Sidebar from '@/components/Home/Sidebar.vue';
export default {
        data() {
            return {
                bookmarkList:[]
            }
        },
        components:{
             Sidebar,
        },
        created() {
            //expand ile ilişkili tabloları getiririz. Bookmarksda category id var ya category name ini almak için expand category dedik. category çekerken categoryId şeklinde olması lazım bookmarksda eşlemesi için. Camelcase 
            this.$appAxios.get("/bookmarks?_expand=category&_expand=user").then(bookmarks_response=>{
                console.log(bookmarks_response);
                this.bookmarkList=bookmarks_response?.data || [];
            })
        },
        methods: {
            updateBookmarkList(categoryId){ //adam menüden categorilere basınca onunla alakalı şeyler gelsin diye
                const url=categoryId ? `/bookmarks?_expand=category&_expand=user&categoryId=${categoryId}` : "/bookmarks?_expand=category&_expand=user";
                this.$appAxios.get(url).then(bookmarks_response=>{
                console.log(bookmarks_response);
                this.bookmarkList=bookmarks_response?.data || [];
            })
            }
        },

}
</script>