export default {
    namespaced:true, //modullerdeki aynı isimli fonks. ayırması için. State da kendi içinde geliyorken mutatio,action getterda gelmiyor 
    state:{
        itemList:[],
        userList:[]
    },
    mutations:{
        setItem(state,item){
            state.itemList.push(item);
        }
    },
    getters:{
        _itemList:state=>state.itemList
    }
}