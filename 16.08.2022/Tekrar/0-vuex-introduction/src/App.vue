<template>
  <div>
    <!-- 
      State componentde, yazılımda kullandığımız değişkenler olarak düşünülebilir. Bu bilgileri başka yerlerde kullanabilmemiz için statei yönetmemiz gerekli. Buna da state management deniliyor.

      Bunu yönetmek için de state management toolu kullanmak gerekli. Bu tool da vuex.

      Uygulamamız seviyesinde bütün componentlerimiz,sayfalarımızın bilgi paylaşımında kullanılır.
      Ne zaman kullanmalıyız: Benim bu bilgimi başka bir component kullanacak mı ve kullanacaksa seviyesi de bambaşka bir yerde ise kullanabilirsin.  

      Vuex genel olarak global bir obje üzerinden iş yapar. Bu yapıya da store deniliyor. En başta bunu oluşturman gerekiyor. Store içindeki bilgiler state olarak ifade ediliyor.

      
    -->

    {{ this.$store.state.user }} <!-- this ile de olur $store da olur değil de bu şekilde -->
    
    <br>
    
    {{ $store.state.fullname }}
   

    <!-- <ul>
      <li v-for="item in woodItems" :key="item.id">{{ item.title }}</li>
    </ul> -->

    <!-- {{ this.activeUser }}

    {{ this.agacElemanlari }} -->

    <UserList></UserList>
    <NewUser></NewUser>
  </div>
</template>

<script>
 
 import UserList from './components/UserList.vue';
 import NewUser from './components/NewUser.vue';

  export default {
      created() {
        console.log(this.$store); //store da böyle erişiyoruz
        console.log(this.$store.state.person); 
        console.log(this.$store.getters.woodItems);
        console.log(this.$store.getters.activeUser);
       // console.log('this.activeUser :>> ', this.activeUser);
      },

     components:{
        UserList,
        NewUser
     }
    
     
  }

</script>