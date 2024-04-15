<template>
  
  <!-- state dediğimiz bizim componentlerde, projemizin içinde kullandığımız değişkenler.
        Bunların yönetimine state management denilir. State management toolu da vuex 
    Vuex global bir obje üzerinden iş yapar
    -->
    <div class="container">
        {{$store.state.person.name}}

        <!-- <ul>
          <li v-for="per in $store.state.permissions" :key="per">
            {{per}}
          </li>
        </ul> -->
        <p>
          <!-- {{agacElemanlari[0].title}} -->
        </p>
        <p>
          <!-- {{$store.state.fullName}}  -->
          
        </p>

        <input type="text" v-model="value">

        <p>
          <UserList></UserList>
          <NewUser></NewUser>
        </p>
    </div>

</template>

<script>

// import { mapGetters } from 'vuex';

import UserList from "@/components/UserList";
import NewUser from "@/components/NewUser";

export default {


    created() {
      // console.log(this.$store);
      // console.log(this.$store.state.person); //kullanabilme için this ve $ kullanmak lazım. store burada dosyanın adı değil
      // console.log(this.mobilyaElemanlari);
    },
    components:{
      UserList,
      NewUser
    },
    computed:{
      value:{ //v- model ile bind ederken değeri obje olarak yazıp get ile okunmasını  set ile atamasını yapıcaz storedan 
        get(){
          return this.$store.getters.woodItems;
        },
        set(val){
          this.$store.dispatch("newItem",val);
        }
      }
     // this.$store.commit("newItem",5); mutationı commit ile çağırırız. 

      // ...mapGetters({ //gettersların içindekilerini veren bir fonks mappgetters
    //       agacElemanlari:"woodItems",
    //      // woodItems:"woodItems",
    //       activeUser:"activeUser"
    //     }) spread operatörü(...) ile mapGetters içindeki verileri al ve computed içine yapıştırıyor.
    }

    //mapGetters bize bir obje döner. mapGetters ya dizi alır içine ya da yukarıdaki gibi obje. Dizi alırsa direk storedaki isimleri yazıyoruz. Kendimiz storedaki isimleri değiştirip yazmak istiyorsak da yukarıda olduğu gibi o zaman objeyi kullanırız.

    
}
   
   


</script>