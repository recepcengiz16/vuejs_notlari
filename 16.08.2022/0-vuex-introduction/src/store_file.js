//vuex bize bütün uygulama içinde erişilebilir global bir yapı sunuyor. Bu yapıya store deniliyor. En başta  bu storeu oluşturmamız gerekiyor. İsminin store olmasına gerek yok dosyanın.


import { createStore } from "vuex"; //npm install vuex@next --save diye yüklemesini yapman gerekli

//Store içindeki bilgilere state deniliyor
const store = createStore({
    //vuex bu statelaeri application seviyesinde merkezi bir yerde saklıyor. Bu da store oluyor.
    state:{//stateleri direk kullanıma açmak yerine getterlar ile kullanıma sunarız hem belli standarta sokmak hem de hatalardan korunmak için 
        person:{
            name:"Recep",
            age:25,
            tcNo:111111,
            password:"Deneme"
        },
        theme:"dark",
        fullName:"Recep Cengiz",
        permissions:[1,2,3,4,5],
        userList:["Recep","İsmail","Lütfiye","Emin","Rukiye"],
        itemList:[
            {id:1,title:"Masa",type:"Mobilya"},
            {id:2,title:"Sandalye",type:"Mobilya"},
            {id:3,title:"TV",type:"Elektronik"},
            {id:4,title:"Monitor",type:"Elektronik"},
            {id:5,title:"Bardak",type:"Plastik"},
        ]
    },
    mutations:{ //statein değerini anlık olarak update ediyor, setter için kullanıyoruz ,senkron çalışır
        newItem(state,item){ // parametre olarak state i ve item(istekle beraber giden data olacak) gönderirsin. Sen sadece 2. parametreyi gönderirsin.
            state.itemList.push(item);
        }
    },
    actions:{
        //aynı mutaions gibi ama daha güçlü ve asenkron olarak çalışır. Component ile mutations arasında çalışan bir ara katman diyebiliriz. Asenkron işlemler için kullanılır. Componentden actiona dispatch ile istek geliyor sonra action da commit yardımı ile mutationı çağırıyor.

        
        newItem(context,item){  //context yerine {commit} şeklinde yazsaydık o zaman da ben contextin içinden commiti kullanıcam demiş olacaktın. o zamanda aşağıda context.commit yerine sadece commit yazardık
            //ilk parametre vuex ile ilgili bilgileri alabilmek için gerekli donanıma sahip değişken,yani mutaiona gettera state erişebilmemi sağlıyor. Vuex in clonu gibi. objedir
            console.log(item);
           // context.state.fullName="Recep"; state e erişebiliyoruz
           //context.dispatch("Item",item); başka bir actionu çağırmak için 
            context.commit("newItem",item); //commit mutation içindeki fonks. çağırmak için
            
        }
    },
    getters:{//statten bilgileri alır bana verir. Tek işi bu
        //Benim bu storedan değişken gibi davranacak yapılarım şunlardır.
        woodItems: state=>state.itemList.filter(x=>x.type=="Mobilya"), //teksatır olduğu için arrow fonks yaptık
        activeUser(state){ //statei değiştirmeden herhangi bir değerini manupule edip yapacaksak kendimiz bir fonks. oluşturup o değeri döneriz

            const user={
                ...state.person
            };
            delete user.password;
            return user;
        }

    }
});

export default store; //bu şekilde de bu store dışarıya açtık. main js de use ile bu store u kullan diyoruz.