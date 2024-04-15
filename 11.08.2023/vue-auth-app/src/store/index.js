import {createStore} from "vuex";

const store=createStore({
    state:{
        user:null
    },
    getters:{
        _isAuthenticated: state => state.user !== null,
    },
    mutations:{
        setUser(state,data){
            state.user=data;
        }
    }
});

export default store;