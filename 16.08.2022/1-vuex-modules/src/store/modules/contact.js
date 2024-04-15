export default {
    namespaced:true, //modullerdeki aynı isimli fonks. ayırması için
    state:{
        contactName:"puresole",
        contactAddress:"Kanada"
    },
    mutations:{
        setItem(state,name){
            state.contactName=name;
            
        }
    },
    getters:{
        _contactName:state=>state.contactName
    }
}