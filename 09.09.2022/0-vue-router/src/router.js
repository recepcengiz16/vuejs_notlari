//import { createRouter, createWebHashHistory } from "vue-router"; # var hash olanda 
import { createRouter, createWebHistory } from "vue-router";

//import HomeCmp from "@/views/Home.vue";


const routes=[
    // {
    //     name:"HomePage", //name hangi route olduğumuzu belirtir.
    //     path:"/",
    //     //component:HomeCmp
    //     component:()=> import("@/views/Home.vue") // bu şekilde de diyebiliriz.
    // },
    {
        name:"AboutPage",    
        path:"/Hakkimda",       
        component:()=> import("@/views/About.vue") // bu şekilde de diyebiliriz.
    },
    {
        name:"DetailsPage",
        path:"/Detaylar/:userID", //parametreli olunca id yi de gönderiyorsun.       
        component:()=> import("@/views/Details.vue") // bu şekilde de diyebiliriz.
        ,beforeEnter: (to, from, next) => {
            //fonks. fakat obje içinde olduğu için iki nokta ile yazmamız gerekli
            //spesifik olarak bir roueta kontrol mekanizmasını bu şekilde koyabilirim beforeEnter ile 
            
            next(false); //dersek bu route u çalıştırmayacak
        }
    },
    {
        name:"HomePage", //Çoklu component şeklinde belirtebiliyoruz.
        path:"/",
        components:{
            default: import("@/views/Home.vue"),
            "header-top": import("@/views/Details.vue")
        }
    }
]



/*
videosinif.com/#/user  js app tarafından algılanıp ona göre o component yükleniyor sayfaya.

videosinif.com =>  ana domain. Uygulama bu domain üzerinde çalışıyor.

# => routing mode Single Page Appin router özelliği ile çalıştığını söylüyor. Yani burada yönlendirme işlemi var diyor

user => Route . Yönlendirme tanımı. 

*/


const router=createRouter({
    routes:routes,
   // history:createWebHashHistory() // bununla yapınca route da # işareti ile yol veriyor. Ve sunucu bunun single page app olduğun anlıyor. Sonra bunun single page app tarafından çözülmesini sağlıyoruz. Yoksa routeda bazen algılamıyor yolu. SPA uygulamalarda bir server yapılandırması uygun değilse çözemeyecek ve 404 hatası verecek. Bu hatanın giderilmesi için hash ile olanı kullanırız.
   history:createWebHistory()
});

router.beforeEach((to,from,next)=>{
    next(); //şeklinde kesin çağırmamız lazım bunu görmeyince he diyor buraya giremez demiş oluyor görmeynce. 
});// route lar çalışmadan önce bu kontrolden geçer. Böylelikle bu sayfaya git ya da gitme diyebiliriz.

export default router;