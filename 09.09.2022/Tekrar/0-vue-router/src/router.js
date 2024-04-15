//import { createRouter, createWebHistory } from "vue-router";
import { createRouter, createWebHashHistory } from "vue-router";
//import Home from "@/views/Home"

const routes=[
    {
        name:"HomePage", //hangi route da olduğumuzu belirtir. url yi hatırlamaktansa bulunduğum sayfa loginPage mi gibi 
        path:"/",
        //component:Home
        component:() => import("@/views/HomePage.vue") //bu şrkilde de import edebilirsin
    },
    {
        name:"AboutPage",
        path:"/hakkimda",      
        component:() => import("@/views/AboutPage.vue") //bu şrkilde de import edebilirsin
    },
    {
        name:"DetailsPage",
        path:"/detaylar/:userId", //burada şu id'li kullanıcının detayı mesela      
        component:() => import("@/views/DetailsPage.vue") //bu şrkilde de import edebilirsin
    }
]


const router=createRouter({
    routes, //arka tarafta kendi eşliyor key value aynı olunca routes:routes yapacaktık ya
    //history:createWebHistory() // Bu nesne, Vue Router tarafından yönetilen URL geçmişini takip eder.
    history:createWebHashHistory()
});

export default router;

/*

JavaScript'te export default ifadesi, bir modülün varsayılan (default) bir dışa aktarma değerini belirtmek için kullanılır. Modül sistemi kullanıldığında, bir dosyadaki fonksiyonları, nesneleri, sınıfları veya diğer değerleri başka bir dosyada kullanılabilir hale getirmek için export ifadesi kullanılır.

export default ifadesi, bir dosyanın sadece bir değerini varsayılan olarak dışa aktarmak için kullanılır. Bu değer, diğer dosyalardan alınan varsayılan import ifadesiyle içe aktarılabilir.

*/