export const product_mixin={ //bu değişkeni dışarıda kullanmak için export const dememiz gerekli
    data() {
        return {
            products:["Masa","Sandalye","Örtü","Halı","Tuval"],
            searchText:""
        }
    },
    computed: {
        filtered(){
            return this.products.filter((element)=>{ //filter da dizi içinde teker teker arıyor.
                return element.match(this.searchText); //match eşleştiriyor.
            }) 
        }
    },
}