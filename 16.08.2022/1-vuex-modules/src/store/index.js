import { createStore } from "vuex";

import contact from "./modules/contact";
import taskmanager from "./modules/taskmanager";

const store=createStore({
     //store içindeki şeylere erişirken namespace gerekmiyor.
    state:{
        mainName:"Recep Cengiz"
    },
    modules:{
        musteri:contact, //normalde key value(contact:contact), aynı isimle yazınca ecmascript bunu eşliyor.
        taskmanager
    }
});

export default store;