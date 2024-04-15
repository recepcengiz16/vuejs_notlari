import { createStore } from "vuex";
import contact from "./modules/contact";
import taskManager from "./modules/taskManager";



const store=createStore({
    namespaced:true, //bununla getterslara da modül ismiyle ulaşmamızı sağladık
    state:{
        mainName:"Kablosuz Kedi"
    },
    modules:{
        "musteri":contact,
        taskManager
    }
});

export default store;