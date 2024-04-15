import {createRouter,createWebHashHistory} from "vue-router";

const routes=[
    {
        name:"HomePage",
        path:"/",
        component:()=>import("@/views/HomePage")
    },
    {
        name:"NewBookmark",
        path:"/newbookmark",
        component:()=>import("@/views/NewBookmark")
    }
]


const router=createRouter({
    routes,
    history:createWebHashHistory()
});

export default router;