<template>
  <div class="container m-5">
    
<!-- Interceptor nedir?

Interceptorlar axios ile yapacak olduğunuz HTTP isteklerinde istek başlamadan, yanıt dönülmeden veya istek sonucuna göre isteğinizin bazı özelliklerini değiştirmek veya bağlı işlemleri kurgulamak için kullanılır.

Kısaca isteklerinizi başlamadan veya atmış olduğunuz isteğin cevabı henüz dönülmeden veya dönen cevaba göre araya girerek konfigüre edebilir, farklı işlemleri tetikleyebilirsiniz.

Biz direk vue js üzerinden database e erişemiyoruz. Biz bir apiye istek atıcaz sonra o da bize veriyi geri döndürecek. Bir apiye ihtiyaç var. Bunun için biz data.json dosyası oluşturduk. Elimizde bir veritabanı olmadığı için bu dosyayı oluşturduk. 


data.jsondaki items veritabanındaki diyelim ki personeller tablosuna karşılık geliyor. npm install --save axios => ile servise istek atmak için terminale bunu yazıyoruz.

Daha sonra json-server --watch data.json ile nereye istek atacak ve veriler işlenecek
-->
  <div class="row justify-content-center">
        <div class="col-md-4">
              <h3>Alışveriş Listesi</h3>
              <hr>
              <div>
                <input type="text" class="form-control my-2" placeholder="Ne Alacaksın?" @keydown.enter="onSave">
              </div>

              <ul v-if="itemList.length>0">
                  <li v-for="item in itemList" :key="item.id" class="d-flex justify-content-between align-items-center my-3">
                    <span>{{item.title}}</span>
                    <button @click="onDelete(item)" class="btn btn-danger btn-sm">Sil</button>
                  </li>
                  
              </ul>
            <div v-else  class="bg-primary p-2 text-white">
                Herhangi bir ürün yoktur.
            </div>

            <small class="text-success d-flex justify-content-end">{{itemCount}} adet alınacak ürün vardır.</small>
        </div>
  </div>

  </div>
</template>

<script>

import axios from "axios"; //axios bize proje seviyesinde instance oluşturur. Diğer yerlerde de kullandığımız axios bu tek olan instanceın ayarlarını kullanır. İstersek birden fazla instance da yapabiliriz. Main js de.

  export default{
    data(){
      return {
        itemList:[]
      }
    },
    mounted() {
      axios.get("http://localhost:3000/items").then(items_resposne=>{
        console.log(items_resposne);
        this.itemList=items_resposne.data || [];
      })
    },
    methods: {
      onSave(e){
        alert(e.target.value);
        const obj={ //id vermeye gerek yok otomatik atanıyor kendisi
          title:e.target.value,
          created_at:new Date(),
          completed:false
        };
        axios.post("http://localhost:3000/items",obj).then(save_response=>{
            console.log(save_response);
            this.itemList.push(save_response.data);
            e.target.value='';
            e.target.focus();
        });//then ile birlikte bu istek bittikten sonra callback gibi bir şey verir
      },
      onDelete(item){
        axios.delete(`http://localhost:3000/items/${item.id}`).then(delete_response=>{
          console.log(delete_response);
          this.itemList=this.itemList.filter(x=>x.id != item.id);
        });
      }
    },
    computed:{
      itemCount(){
        return this.itemList.length || 0;
      }
    }
  }

</script>