import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate"; //state de tuttuğumuz verinin kalıcı olması için.

import SecureLS from "secure-ls"; // state deki verileri şifreli bir şekilde tutabilmek için
var ls=new SecureLS({isCompression:false})


const store=createStore({
    state:{
        user:null,
        saltKey:"1235!?_*sfsdnQRt"    
    },
    getters:{
        _isAuthenticated(state){
            return state.user!=null;
        },
        _getCurrentUser(state){
            const user=state.user;
            delete user?.password;
            return user;
        },
        _userLikes: state => state.user?.likes || [],
        _userBookmarks : state =>state.user?.bookmarks || [],
        _saltKey(state){
            return state.saltKey;
        },
        _currentUserId(state){
            return state.user?.id;
        }
    },
    mutations:{
        setUser(state,user){
            state.user=user;
        },
        logoutUser(state){
            state.user=null;
        },
        setLikes(state,bookmarkIds){
            state.user.likes=bookmarkIds;
        },
        setBookmarks(state,bookmarkIds){
            state.user.bookmarks=bookmarkIds;
        }
    },
    plugins:[createPersistedState({
        storage:{
            getItem:key=>ls.get(key), //key dediğimiz vuex oluyor
            setItem:(key,value)=>ls.set(key,value),
            removeItem:key=>ls.remove(key)
        }
    })]// vuex-persistedstate kullanabilmek için plugins içinde yazdık.
});

export default store;