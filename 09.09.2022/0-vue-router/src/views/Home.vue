<template>
    <div>
        <h1>HOME</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum hic repudiandae non, consectetur quia ipsam culpa! Consequatur iure placeat cupiditate quaerat sapiente, officia, neque vero asperiores voluptatibus facilis repellat nobis?
        </p>

        <!-- {{$route.query.soyadi}} query şeklinde olan routeda yer alan datayı okumak için -->

       

        <input type="text" @keydown.enter="gotoDetails">
    </div>
</template>


<script>

    export default {
        methods:{
            gotoDetails(e){
               // this.$router.push(`/Detaylar/${e.target.value}`); //push ile yönlendirme yapabiliriz
               this.$router.push({ //route u obje şeklinde de verebilirsin.
                    name:"DetailsPage",
                    params:{
                        userID:e.target.value
                    },
                    query:{
                        type:"DetailAuth",
                        user:"recepcengiz"
                    }
               });
            }
        }
    }

</script>