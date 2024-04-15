<template>

  <!--

    Componentler arasında veri iletişimi:
    Componentlerin içeriğini değiştirmek için onlara dışarıdan veri göndermek gerekli, buna da veri iletişimi denir.

    Vue ile componentler arasında veri iletişimi birkaç yol ile yapılır:

    1) Parent => child (props:Parent component’ten child component’e veriyi gönderirken props denen yapıyı kullanıyoruz. Props ile gönderdiğimiz veriyi child component’te karşılayarak normal data gibi kullanıyoruz.)
    Parent tan childa gönderirken attr içinde tanımlarsın



    2) Child => Parent(custom event)  Child Parent Arası İletişim ($emit):
    
    Child component’ten parent component’e veriyi aktarırken bir event emit(belirtmek,çıkarmak) etmemiz gerekiyor. Eventi parent component’ten yakalayarak istediğimiz işlemi yapabiliriz. 
    Emitleri this.$emit('emit_adi',veri) şeklinde oluşturabiliriz. Child dan parenta event şeklinde değerleri yollarsın 

    Parent: İçerisinde farklı farklı componentleri barındıran component.
    Child: Bir component içerisinde tanımlanmış veya çağırılmış component

  Provide ve inject diye bir şey var. Parent ve child en fazla 2 tane iç içe yapıda işe yarıyor daha sonra iç içelik çoğaldıkça bu yapı karmaşıklaşıyor. Bu karmaşıklığı gidermek için provide ve inject var. 

  Ana parent üzerinde mesela app.vue içinde datayı provide ederiz. Kullanmak istediğimiz yerde inject yaparız.

  Event bus dediğimiz şey de main js de bir değişken tanımlarız export const . global olduğu için childdan childa veri alması da kolay oluyor. 
  -->

  <div class="container">
      <h3 class="text-center">Todo App</h3>
    <hr class="my-2">

    <div class="row justify-content-center">
        <div class="col-md-8">
              <!-- <add-section  @add-todo="addNewToDo"></add-section> emmit ile parenta gelen, emit ile gelenleri parent componentte event ile yakalarız.  --> 
              <add-section :addNewToDo="addNewToDo"></add-section> <!-- Child componente gönderilen datayı attr. ile göndeririz. -->
        </div>
    </div>

    <div class="row justify-content-center">
        <div class="col-md-8">

          <!-- <list-section :todoList="todoList" @delete-todo-item="deleteItem"></list-section> -->
          <list-section></list-section>

           
        </div>
    </div>
    
  </div>
</template>

<script>

  import AddSection from "@/components/AddSection";
  import ListSection from "./components/ListSection";
  

    export default{
      components:{
        AddSection,
        ListSection
      },
      data() {
        return {
          provideData:{ //provide işleminde listede değişiklik olduğunda bunu algılamıyor herhangi bir obje oluşturup listeyi onun içine koyuyoruz.
             todoList:[
            {id:1,text:"Bootcamp 1. hafta"},
            {id:2,text:"Bootcamp 2. hafta"},
            {id:3,text:"Bootcamp 3. hafta"},
            {id:4,text:"Bootcamp 4. hafta"},
            {id:5,text:"Bootcamp 5. hafta"},
            {id:6,text:"Bootcamp 6. hafta"}
          ]
          }
        }
      },
      provide(){ //aynı data gibi tanımlanması
        return{
            provideData:this.provideData, //provideData gönderiliyor listeyi değil, öteki türlü liste gönderince normal liste gönder farkı kalmıyor.
            deleteItem:this.deleteItem
        }
      },
      computed:{
        listLength(){
          return this.provideData.todoList.length;
        }
      },
      methods: {
        testEvent(){
          alert("Merhaba");
          
        },
        deleteItem(todo){
            this.provideData.todoList=this.provideData.todoList.filter(x=>x!==todo);
        },
        addNewToDo(todo){
            this.provideData.todoList.push({
              id:this.provideData.todoList.length+1,
              text:todo
            });
            todo="";
        }
      },

    }

</script>