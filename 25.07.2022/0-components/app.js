const app = Vue.createApp({
    data() {
        return {
           recep:"Recep"
        }
    },
    components:{
        who:{ //component olarak yazdığımızda templatede yer alan neyse onu gösteriyor.
            data() {
                return {
                    veri:"Deneme"
                }
            },
            template:`<div class="container">{{veri}}</div>`
        }
    }
});

//bu şekilde de olur. Ya da yukarıdaki gibi components içinde de tanımlayarak diyerek de olur.
app.component("counter-item",{ 
    data() {
        return {
            counter:0,          
        }
    },
    template:`
        <div class="container-sm">
            <h3 class="mb-2"> {{counter}} </h3>
            <button @click="counter--" class="red sm"> - </button>
            <button @click="counter++" class="green sm"> + </button>
           
        </div>
    ` // `` arasında yazdık buna da string component deniliyor
}); // componentteki 2. parametre options yani aslında vue küçük bir vue instance örneği oluyor.

app.mount("#app"); //ille de idsi bu olan değil, classı bu olan diye de yazabiliriz.