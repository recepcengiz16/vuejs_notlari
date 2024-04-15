import {createRouter, createWebHashHistory} from "vue-router";
import store from "../store";
import MainLayout from "../layouts/MainLayout.vue";
import AuthLayout from "../layouts/AuthLayout.vue";


const routes=[
    {
        name:"HomePage",
        path:"/",
        component:()=>import("@/views/HomePage.vue"),
        meta:{
            layout:'Main',
            componentLayout:MainLayout
        }
    },
    {
        name:"LoginPage",
        path:"/login",
        component:()=>import("@/views/AuthView.vue"),
        meta:{
            layout:'Auth',
            componentLayout:AuthLayout
        }
    },
    {
        name:"RegisterPage",
        path:"/register",
        component:()=>import("@/views/RegisterPage.vue"),
        meta:{
            layout:'Auth',
            componentLayout:AuthLayout
        }
    },
]


const router=createRouter({
    history:createWebHashHistory(),
    routes
});


router.beforeEach((to,_,next)=>{
    console.log(store.state.user);
   const isAuthenticated = store.getters._isAuthenticated;
   const authRequiredRoutes = ["HomePage"];
   const authNotRequiredRoutes = ["LoginPage", "RegisterPage"];

   if (authNotRequiredRoutes.indexOf(to.name) > -1 && isAuthenticated) next(false); //auth olmuşsa tekrar buraya gitmesin

   if (authRequiredRoutes.indexOf(to.name) > -1) {
     if (isAuthenticated) next();
     else next({ name: "LoginPage" });
   } else {
     next();
   }
});



export default router;