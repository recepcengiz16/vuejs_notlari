export default {
    namespaced:true, //bununla getterslara da modül ismiyle ulaşmamızı sağladık
    state:{
        contactName:"Emiş",
        contactAddress:"İstanbul"
    },
    mutations:{
        setItem(state,name){
            state.contactName=name;
            console.log("Eklendi");
        }
    },
    getters:{
        _contactName:state=>state.contactName,

    }
};

//burada create store diyerek oluşturmamıza gerek yok bu objeyi export etsek yeter.