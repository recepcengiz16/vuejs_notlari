import { createRouter, createWebHistory } from "vue-router";

const routes=[
    {path:"/",component:()=>import("@/components/products/ProductList")},
    {path:"/urun-islemleri",component:()=>import("@/components/products/ProductPurchase")},
    {path:"/urun-cikisi",component:()=>import("@/components/products/ProductSell")},
    {path:"*",redirect:"/"}
];


const router=createRouter({
    mode:"history",
    history:createWebHistory(),
    routes
});

export default router;