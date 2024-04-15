<template>
    <div>
        <app-header></app-header>
       <div class="flex flex-row">
            <Sidebar />


            <component :is="$route.meta.componentName" :items="bookmarkList">
                
            </component>

            <div>
                <input type="text" @keydown.enter="SEND_MESSAGE" />
            </div>

            <!-- <app-bookmark-list v-if="bookmarkList.length>0" :items="bookmarkList"></app-bookmark-list>
            <div v-else>Bookmark bulunmamaktadır.</div> -->
       </div>
    </div>
</template>

<script>

import Sidebar from "@/components/Account/Sidebar" 
//import io from "socket.io-client";

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
        this.$appAxios.get("/bookmarks?_expand=category&_expand=user").then(response => { //bu şekilde _embed=categories yaparsan categories tablosunu da getirir diğer tarafta category name i kullanabilmek için yaptık
            this.bookmarkList=response?.data || [] ;
        });
    },
    mounted() {
        //this.$socket=io("http://localhost:1996");
        this.$socket.on("WELCOME_MESSAGE",this.WELCOME_MESSAGE)
    },
    methods: {
        WELCOME_MESSAGE(data){
            console.log(data);
        },
        SEND_MESSAGE(e){
            this.socket.emit("SEND_MESSAGE",e.target.value);
        }
    },
   
}
</script>