const app = Vue.createApp({
    data() {
        return {
            counter:0,
            counter2:0
        }
    },
    methods: {
    //    getCounterResult(){
    //     return this.counter > 5 ? "Büyük":"Küçük";
    //    }
       
    },
    computed:{
        //computed Bir fonks gibi tanımlanan değişkenlerdir diyebiliriz. Değişken gibi kullanılan metot gibi tanımlanan yapılardır.
        
        //computedlar değişken gibi davranır ve geriye bir değer döndürmesi gerekir. Belirli olan değişikliği takip etmek için vardır. html tarafta fonksiyon gibi değil de normal çağırılırlar.

        /*
             Methods ile arasındaki fark template her render edildiğinde computed kodu analiz eder ihtiyacı olan yani kullandığı değişken değeri değişmiş ise fonksiyonu çalıştırır. Methodlar her render edildiğinde çalışır.
        
        */



        getCounterResult(){
            return this.counter > 5 ? "Büyük":"Küçük";
        },

        getCounter2Result(){
            return this.counter2 > 5 ? "Büyük":"Küçük";
        }

    },
    watch:{
        //Bizim datada, computed da, props da olabilir yani app instance ın içindeki değeri değişebilecek herhangi bir değeri izleyebilmemizi sağlar. Aynı isim olarak vermek gerekli, computed içindeki veri değişimine göre bir değer return etmek zorunda, watch ise değil. computed 2,3 değere bakabilir. watch ise tek bir değeri inceler yani sadece countera bakar. ya da getCounterResult

        /*
            Herhangi bir değişkeni anlık izlememiz ve değişikliği yakalamamızı sağlar.Kullanımında hangi değişkeni takip etmek istiyorsak onun adında bir fonksiyon oluşturmalıyız. Computed senkron çalışırken watch asenkron çalışır. 
        */



        counter( newValue , oldValue){ //eski ve yeni değer olarak
            console.log(oldValue, "=>", newValue);
        },

        getCounterResult(newValue,oldValue){
            console.log(oldValue,"=>",newValue);
        }
    }
}).mount('#app');
