const app = Vue.createApp({
    data() {
        //2 türlü vue js compilerı var. Biri browserda diğeri de build vue js in sağladığı development sürecinde karşımıza çıkıyor.

        //Vue instance da bir değişiklik olunca bir template üretiyor. Bu template ile virtual dom kıyaslanıyor. Eğer bir değişiklik varsa bunu normal doma yansıtıyor virtual dom. 
        
        //Gerçek DOM render edildiğinde, virtual DOM ile eşittir. Virtual DOM’da bir değişiklik meydana geldiğinde, gerçek DOM’a sadece değişikliğe konu alanlar yansıtılır ve her iki DOM tekrar birbirine eşitlenmiş olur.

        /*
            Kısaca süreç şöyle işler:

            İzleme (Tracking): Vue, uygulama durumundaki değişiklikleri izler ve bu değişikliklere bağlı olarak virtual DOM'da güncellemeler yapar. Bu izleme süreci, hangi verilerin ve bileşenlerin değiştiğini anlamak için "reaktif sistem" üzerinden yürütülür.

            Yansıtma (Rendering): virtual DOM'da değişiklikler olduğunda, Vue, güncellenmiş virtual DOM ve eski virtual DOM arasında bir "diffing" (fark) işlemi yapar. Bu işlemde, yalnızca değişen bölümler belirlenir.

            Gerçek DOM'a Güncelleme: Vue yalnızca fark edilen değişiklikleri gerçek DOM'a uygular, böylece tüm DOM'u yeniden render etmek yerine minimum düzeyde güncelleme yapılır. Bu işlem, performansı artırır ve tarayıcıda daha hızlı bir kullanıcı deneyimi sağlar.
        */

        return {
            title:"recep",
            content:null,
            todoText: null,
            owner:"Kablusuz kedi",
            todoList: [],
            url:"https://www.google.com.tr",
            myLink:{
                url:"https://www.google.com.tr",
                target:"_blank",
                alt:"resim",
                title:"Merhaba"
            },
            coords:{
                x:null,
                y:null
            }
        };
    },
    methods: {
        addTodo(){
            this.todoList.push(this.todoText);
            this.todoText="";
        },
        changeTitle(yazi,e){
           
            this.title=yazi; //this anahtar kelimesi ile vue instance nesnesini işaret etmiş oluyorum. Ve vue içindeki propertylere ya da diğer verilere this ile ulaşabiliriz.
            console.log(e);
        },
        updateCoords(message,e){
                this.coords.x=e.x;
                this.coords.y=e.y;
               
        }
    },
});

app.mount("#app"); //idsi app olan bir elementim var. Bu vue.js apllication bunun içinde olacak demiş olduk. İlla id olarak değil de class olarak da yazabiliriz.
