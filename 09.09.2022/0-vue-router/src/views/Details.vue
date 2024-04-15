<template>
    <div>
        <h1>Details</h1>
        <p>
            Açıklamalar burada yer alacaktır.
        </p>

        <p>
            {{$route.params.userID}}
            {{ $route.query.firstName }}
        </p>
        
        <button class="btn btn-success" @click="this.$router.push('/');">Geri Dön</button>  

        <router-link  class="btn btn-primary" :to="{name:'DetailsPage',params:{userID: $route.params.userID} , query:{firstName:'Recep',lastName:'Cengiz'}}">Kullanıcıyı Düzenle</router-link> <!-- yönlendirmede daha iyi bir yöntem -->

    </div>
</template>

<script>

    export default {
        created(){
            console.log(this.$route); //url ile ilgili bilgi almamızı sağlıyor.
        }
        // watch:{
        //     "$route"(to,from){

        //     }
        // }
    }

</script>