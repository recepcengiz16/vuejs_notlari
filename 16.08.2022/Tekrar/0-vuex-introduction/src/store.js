import { createStore } from "vuex";

/*
 Standart elde etmek için, ve yazılımcıların kullandığı bilgileri filtreleyebilmek için stateler direk kullanılmaz da getterlar ile kullanılır.

*/

const store=createStore({
    //içine obje alır.
    state:{ //uygulama içerisinde erişebildiğimiz bilgiler
        user:{
            name:"Recep",
            lname:"Cengiz",
            age:26,
            address:{},
            password:1245,
            tc:123355
        },
        theme:"dark",
        permissions:[1,2,4],
        userList:["Recep","Emin","İsmail","Lütfiye"],
        fullname:"Recep CENGİZ",
        itemList:[
            {id:1,title:"Masa",type:"Mobilya"},
            {id:2,title:"Sandalye",type:"Mobilya"},
            {id:3,title:"TV",type:"Elektronik"},
            {id:4,title:"Monitor",type:"Elektronik"},
            {id:5,title:"Bardak",type:"Plastik"},
        ]
    },

    mutations:{
        //statein değerini anlık olarak hızlı bir şekilde update etmemizi sağlar. Senkron çalışır. Küçük bir gecikme olursa ben senin datanı set etmem diyor.
        newItem(state,newItem){ // 2.parametre de bu mutationa gelecek olan bilgi
            state.itemList.push(newItem);
        }
    },

    actions:{
        //mutationın asenkron olanı ama daha güçlü, async ve awaiti de kullanabiliriz istersek, yazman zorunlu değil
        async newItem(context,item){ // 2.parametre de bu actiona gelecek olan bilgi
            //context bir obje ve vuex ile ilgili bilgiyi içeren gerekli değişken , yani vuex in klonu diyebiliriz. gettera, mutationa, state e vs erişebilmemizi sağlar. this.$store yani.
            await setTimeout(()=>{
                context.commit("newItem",item); //mutationı çağırdık
            },2000);


        },

        newItem2({commit},item){ 
            /*
            burada {commit} diyerek context için destractive yapıyı kullanmış oldum. 
            Yani dizi veya nesneden elemanları veya özellikleri ayırarak değişkenlere atama yapmayı sağlayan bir özelliktir.

            Destructuring, iki şekilde kullanılabilir: Array destructuring (dizi yıkımı) ve Object destructuring (nesne yıkımı).
            
            Array Destructuring (Dizi Yıkımı):
            const array = [1, 2, 3];
            const [a, b, c] = array;

            console.log(a); // 1
            console.log(b); // 2
            console.log(c); // 3
            


            Object Destructuring (Nesne Yıkımı):
            const person = {
                name: 'John',
                age: 30,
                city: 'New York'
            };

            const { name, age, city } = person;

            console.log(name); // 'John'
            console.log(age); // 30
            console.log(city); // 'New York'

            
            */
            commit("newItem",item); //mutationı çağırdım.
        }
    },

    getters:{
        //benim bu storedan değişken gibi davranacak yapılarım şunlardır. Getterın işi stateden bilgileri geri döndürmektir. Değişken gibi kullanılır ve geriye değer döndürür. 

        woodItems : state => state.itemList.filter(x=>x.type==="Mobilya"), //fonks. şeklinde yazarız. Tek satırlık olduğu için bu şekilde yazdık

        activeUser(state){ //parametre olarak statei alır. yukarıda da aynı, tek satırlık fons. olduğu için kafan karışmasın
            const user={...state.user};
            delete user.password; //silmek istediğimiz propertyi delete ile sildik.
            return user;
        }
    } 
});

export default store; //bu store u bilmiyor henüz, vue js e tanıtmamız için main js de tanıtıyoruz.