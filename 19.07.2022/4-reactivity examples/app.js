const app = Vue.createApp({
    data() {
        return {
            search:"",
            itemList:["elma","armut","kiraz","çilek"],
          //  filteredList:[]
        };
    },
    methods: {
        searchList(){
           // this.filteredList=this.itemList.filter(i=>i.includes(this.search));
            
        }
    },
    computed:{ //reactivity tepkisellik demek, yapılan değişime olan cevap
        filteredList(){
            return this.itemList.filter(i=>i.includes(this.search));
        }
    },
    watch:{ //normalde biz fonks. şeklinde yazmamız gerekliydi itemlisti fakat primitif tiplerde fonks şeklinde yazarız. referans tipli olunca obje şeklinde yazıyoruz.
        itemList:{
            deep:true, //bu arkadaşı(itemlist) izlemek için deep keyi true olacak ve 
            handler(newList){ //handler da itemlist değiştiği anda olacak işlem oluyor.
                console.log("itemlist:",newList);
                /*
                    handler da fonks. şeklinde yazdığımız bir watch

                    itemList(liste){ // new ve old value vardı ya, tek parametre yazarsan new halini alıyor.
                         console.log("liste=>",liste); 
                    }
                */
            }
        },
       
    }
    
}).mount("#app");
