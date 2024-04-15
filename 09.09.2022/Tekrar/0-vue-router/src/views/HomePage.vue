<template>
    <div>
        Home <br>

        <input type="text" @keydown.enter="gotoDetails">
    </div>
</template>

<script>
export default {
    methods: {
        gotoDetails(e){
            alert(e.target.value);
            //this.$router.push(`/detaylar/${e.target.value}`); bu bir yöntem
            this.$router.push({ //bu da 2. yöntem yönlendirmede
                name:"DetailsPage", //name i bu olan route
                params:{
                    userId:e.target.value
                },
                query:{
                    message:"Deneme",
                    id:5,
                    sonuc:10
                } //burada istersek query ile de gönderebiliriz.
            });
        }
    },
}
</script>