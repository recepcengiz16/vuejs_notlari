//bir html kod bloğu var ve ben bunu vue js ile kontrol etmek istiyorsam eğer vue js uygulaması üretmemiz gerekli
//vue js tarafına vue instance denir.

//1) Vue js uygulaması oluştur.
const app = Vue.createApp({
    //Html template ile etkileşime giren ve business logicin olduğu yer vue instance dır.

    /*
        Vue js bizim ona gönderdiğimiz vue instanceını watcher layer dediğiğimiz ara katman ile izliyor. Bu sayede değişimlerden vs haberi oluyor. Vue js oluşturulduktan sonra biz kendimiz sonradan bir property tanımlayamayız. Tanımlanır fakat vue js içerisinde reaktiviti anlamında kullanamıyoruz. Bu yüzden tanımlamayız sonradan propertyi. 
        Örn: app.Islemler="Test"; gibi sonradan tanımlayamayız. Biz ilk tanımlamaları create app içinde göndeririz.
        
        Çünkü kendi arasında sonradan bağlantı kuramıyor.


        $el => Vue js bütün template işlemlerini bu propertyden gerçekleştiriyor. Template e erişmemizi sağlıyor.
        
        $data => vue instance daki datanın aynısını veriyor. app.$data.title(this.$data.title da olur) ile de erişebilirim ben titlea.  

        ref vue js tarafından bilinen (htmlde yok) ve buna göre aksiyon alınan bir attr. . Ref vasıtasıyla html elementlere ulaşabiliyorum ben.
        
        <h1 ref="myButton"> MERHABA </h1>
        this.$refs.myButton dediğimizde html elementini geri döner yani yukarıdaki elementi döner.
        this.$refs.myButton.innerText="Test";

        this. deyip ya da app. deyip $ işareti ile başlayan bize vue instance tarafından bize sağlanan ya property ya da metottur.

        template bize root element hariç içindeki yapıyı veren propoerty. Kontrol altına aldığımız html yapısını ifade ederiz.

    */


    data() {
         /*
        Api tabanlı çalıştığımız projelerimizde her modül için api’den aldığımız array veya object tipinde veriler olacaktır. 
        Bu verileri işleyebilmek için bir değişken ile eşleştirmemiz, o değişkene değer olarak atamamız gerekir. Tam bu noktada ‘data’ devreye girer. 
        Sayfa ilk yüklendiğinde ilgili değişkenleri, tiplerini ve ilk değerlerini ‘data’ içerisinde tanımlarız
        
        */
        return {
            title:"Merhaba, ben Vue.js öğreniyorum.",
            content:"Deneme 1-2. Ses kontrol :)",
            url:"https://www.google.com",
            myLink:{
                title:"Google",
                target:"_blank",
                url:"https://google.com",
                alt:"google'a git"
            },
            owner:"Poğaça",
            coords:{
                x:0,
                y:0,
            }
        };
    },
    methods: { //benim methodlarımı tutan key
        changeTitle(ptitle){
           this.title=ptitle;

        },
        merhaba(){
            //alert("Merhaba");
        },
        updateCoords(message,e){
            this.changeTitle(`${e.x} , ${e.y}`); // metodun içinde de kendi metodunu çağırabiliriz.
            this.coords={
             x:e.x,
             y:e.y
           };
           alert(message);
        }
        
    },
}).mount("#app"); //mount ile de diyoruz ki bu vue js uygulaması idsi app olan tagin içinde çalışacak. vue 2 de mount yerine el vardı. mount create olmuş bir instance a bir template i bağlamamızı sağlar. Burada da idsi app olan demiş olduk.

console.log(app);
