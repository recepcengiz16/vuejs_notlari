import Vue from "vue";
import {router} from "../../router";


const state={
    products:[]
}

const getters={
    getProducts(state){
        return state.products;
    },
    getProduct(state){
        return key=> state.products.filter(element=>{
            return element.key==key;
        })
    }
}

const mutations={
    updateProductList(state,product){
        state.products.push(product);
    }
}

const actions={
    Initapp({commit},){
        Vue.http.get("https://urun-islemleri-3d613-default-rtdb.firebaseio.com/products.json").then(response=>{
            let data=response.body;
            for (let key in data) {
                
                data[key].key=key;
                commit("updateProductList",data[key]);
            }
        });
    },
    saveProduct({dispatch,commit},product){
        Vue.http.post("https://urun-islemleri-3d613-default-rtdb.firebaseio.com/products.json",product).then((response)=>{
            /* ÜRÜN LİSTESİNİN GÜNCELLENMESİ  */
            product.key=response.body.name;
            commit("updateProductList",product);

            /* ALIŞ,SATIŞ,BAKİYE BİLGİLERİNİN GÜNCELLENMESİ */

            let tradeResult={
                purchase:product.price,
                sale:0,
                count:product.count
            }

            dispatch("setTradeResult",tradeResult);
            router.replace("/");
            
        });
    },
    sellProduct({state,commit,dispatch},payload){

        let product = state.products.filter(element=>{
            return element.key==payload.key;
        })

        

        if(product){
            let totalCount=product[0].count-payload.count;

            Vue.http.patch("https://urun-islemleri-3d613-default-rtdb.firebaseio.com/products/"+payload.key+".json",{count:totalCount}).then(response=>{
                product[0].count=totalCount;

                let tradeResult={
                    purchase:0,
                    sale:product[0].price,
                    count:payload.count
                }
    
                dispatch("setTradeResult",tradeResult);
                router.replace("/");

            });

        }

        
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}