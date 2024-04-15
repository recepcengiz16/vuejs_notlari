export default {
    namespaced:true, //bununla getterslara da modül ismiyle ulaşmamızı sağladık
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
        _itemList:state=>state.itemList,

    }
}