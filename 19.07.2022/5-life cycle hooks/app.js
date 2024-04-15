const app = Vue.createApp({
    data() {
        return {
           title:"Test başlığı",
          itemList:[],
          
        };
    },
    beforeCreate() {

     /*
          Vue.js instance nesnesi oluşturulmadan önce çağrılan metoddur. Bu işlem tamamlanmadan hiç bir lifecycle methodu ile etkileşime giremeyiz. Yani events, computed properties vs. çalışmayacaktır.
     */
    console.log(" beforeCreate Çalıştı...");

   },
   created() {

     /*
          ilk Vue.js instance nesnesi oluşturulduğunda çağrılan metoddur. Bu method içerisinde events, computed properties vb. lifecycle method’ları kullanılabilir fakat Dom henüz oluşturulmadığından bu method içerisinden ‘$el’ erişimi sağlayamıyor oluruz.

          Created fonksiyonu element için 1 kez tetiklenir, silinse dahi bunu tutar ve bir sonraki çağrılışında sadece içindeki objeleri değiştirir.

     */

        console.log("created Çalıştı...");
        setTimeout(()=>{
            this.itemList=[10,20,30];
        },2000);
   },
   beforeMount() {

     /*
          Bu aşamada “$el” elementimiz olarak belirttiğimiz html kod bloğu sanal DOM’a daha yerleştirilmemiştir. Aynı zamanda “$el” property ‘de kullanıma daha henüz hazır değildir.

          “$el” elementi hazırlanmadan önce bu method çağrılır.
     
     */

        console.log("beforeMount Çalıştı...");
   },
   mounted() { //elemente erişmek istiyorsak mounted da erişebiliriz çünkü diğerlerinde elimizde bir dom yapısı oluşmamış oluyor.
          /*
          Bu aşamada “$el” elementimiz sanal DOM’a yerleştirilmiştir. Kısaca tüm componentler render edilmiş ve sanal DOM hazırlanmıştır.
          
          */
        console.log("mounted Çalıştı...");
   },
   beforeUpdate() {

     /*
     DOM’da güncellemeye ihtiyaç duyulduğunda, data ve DOM’da veri değişmeden önce bu metod çağrılır.
     */

        console.log("beforeUpdate Çalıştı...");
   },
   updated() {

     /*
     DOM’da veri değiştiğinde bu metodu çağrılır.
     
     */

        console.log("updated Çalıştı...");
   },
   beforeUnmount() {

     /*
     Vue instance nesnesi yok edilmeden önce çağrılan metodudur.
     */

        console.log("beforeUnmount Çalıştı...");
   },
   unmounted() {

     /*
     Vue instance nesnesi yok edildikten sonra çağrılan metodudur. template ile vue instance arasındaki bağı kopartıyorsun
     */

        console.log("unmounted Çalıştı...");
   },
    methods: {
       
    },

    computed:{
      
    }
    
}).mount("#app");
