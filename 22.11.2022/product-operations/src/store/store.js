import { createStore } from "vuex";

import product from "./modules/product";
import * as getters from "@/getters"; //getters (* as)  ile burada obje dönüyor. O yüzden gettersı direk yazdık. getters: getters demedik
import * as mutations from "@/mutations";
import * as actions from "@/actions"; 

const store=createStore({
    state:{
        purchase:0.0,
        sale:0.0,
        balance:0.0
    },
    modules:{
        product
    },
    getters,
    mutations,
    actions
});


export default store;