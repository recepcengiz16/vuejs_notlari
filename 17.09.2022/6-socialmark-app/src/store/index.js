import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate"; //statein kalıcı olarak tutulmasını sağlamış olduyorsun createPersistedState kullanarak. npm install --save vuex-persistedstate ile kurulumunu sağlıyorsun.

import SecureLS from "secure-ls"; //secure ls ile de vuex deki veriyi şifrelemiş oluyorum. npm install secure-ls ile kurulumunu yapıyorsun

var ls = new SecureLS({ isCompression: false}); //isCompression ile sıkıştırma olsun mu

export default createStore({
    state:{
        user:null,
        saltKey:"recepcengiz123!"
    },
    mutations:{
        setUser(state,user){
            state.user=user;
        },
        logoutUser(state){
            state.user=null;
        },
        setLikes(state, bookmarkIds) {
            state.user.likes = bookmarkIds;
        },
        setBookmarks(state, bookmarkIds) {
            state.user.bookmarks = bookmarkIds;
          }
    },
    getters:{
        _isAuthenticated: state=>state.user!==null,
        _getCurrentUser(e){
            const user=e.user;
            delete user?.password; //soru işareti ile yani userın password diye propoertsi varsa silsin extra if ile kontrol kodu yazmaktan kurtardı. Buna optional chainig deniliyor.
            return user;
        },
        _userLikes: state => state.user?.likes || [],
        _userBookmarks: state => state.user?.bookmarks || [],
        _currentUserId:state=>state?.user?.id,
        _saltKey:state=>state.saltKey
    },
    plugins:[createPersistedState({
        storage:{
            getItem:key=>ls.get(key), //key dediğimiz vuex oluyor
            setItem:(key,value)=>ls.set(key,value),
            removeItem:key=>ls.remove(key)
        }
    })]// vuex-persistedstate kullanabilmek için plugins içinde yazdık.
});