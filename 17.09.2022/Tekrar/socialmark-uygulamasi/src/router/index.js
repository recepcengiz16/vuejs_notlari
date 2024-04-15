import { createRouter, createWebHashHistory } from "vue-router";
import store from "@/store";


const routes=[
    {
        name:"HomePage",
        path:"/",
        component:()=>import("@/views/HomePage")
    },
    {
        name:"LoginPage",
        path:"/login",
        component:()=>import("@/views/LoginPage")
    },
    {
        name:"RegisterPage",
        path:"/register",
        component:()=>import("@/views/RegisterPage")
    },
    {
        name:"NewBookmarkPage",
        path:"/newbookmark",
        component:()=>import("@/views/NewBookmarkPage")
    },
    {
        name: "Favorites",
        path: "/favorites",
        meta: { //route ile ilgili spesifik bilgiler göndermemize yarıyor.
          componentName: "appBookmarkList"
        },
        component: () => import("@/views/Account")
      },
      {
        name: "Likes",
        path: "/likes",
        meta: {
          componentName: "appBookmarkList"
        },
        component: () => import("@/views/Account")
      },
      {
        name: "Settings",
        path: "/settings",
        meta: {
          componentName: "userSettings"
        },
        component: () => import("@/views/Account")
      }
];


const router=createRouter({
    routes,
    history:createWebHashHistory()
});

router.beforeEach((to,from,next)=>{

    const requiredRoutes=["HomePage"];
    const authNotRequiredRoutes=["LoginPage","RegisterPage"];
    const _isAuthenticated=store.getters._isAuthenticated;


    if(authNotRequiredRoutes.indexOf(to.name) >-1 && _isAuthenticated) { //auth olup da logine felan gitmesin
        next(false);
    }

    if(requiredRoutes.indexOf(to.name) > -1){
        if(_isAuthenticated) next();//diyip yoluna devam edebilir
        else next({name:"LoginPage"});
    }else next();

    console.log(to,from);
   // next(); //next bir callback fonks.
}); //routera girmeden önce kontrol yapıyoruz. asp.core daki filter gibi düşünebilirsin. Authenticate olmuşsa sayfaya gitsin

export default router;