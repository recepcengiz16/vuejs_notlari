<template>
    <div>
        <app-header></app-header>

        <div class="flex flex-row">
            <MySidebar @category-changed="updateBookmarkList"></MySidebar>

            <app-bookmark-list v-if="bookmarkList.length>0" :items="bookmarkList"></app-bookmark-list>
            <div v-else>Bookmark bulunmamaktadır.</div>

        </div>

         
    </div>
</template>

<script>
import MySidebar from '../components/Home/MySidebar.vue';

export default {
    data() {
        return {
            bookmarkList:[]
        }
    },
    created() {
        this.$appAxios.get("/bookmarks?_expand=category&_expand=user").then(response => { //bu şekilde _embed=categories yaparsan categories tablosunu da getirir diğer tarafta category name i kullanabilmek için yaptık
            this.bookmarkList=response?.data || [] ;
        });
    },
    components:{
        MySidebar,
        
    },
    methods: {
        updateBookmarkList(categoryId){

            console.log(categoryId);

            const url= categoryId ? `/bookmarks?_expand=category&_expand=user&categoryId=${categoryId}` : "/bookmarks?_expand=category&_expand=user";

            this.$appAxios.get(url).then(response => { 
                console.log(response);
            this.bookmarkList=response?.data || [] ;
        });
        }
    },
}
</script>