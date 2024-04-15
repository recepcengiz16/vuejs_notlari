<template>
    <div>
        <h1>Details</h1>
        <p>
            Açıklamalar burada yer alacaktır. <br>

            {{ $route.params.userId }}

            <!-- {{ $route.query.merhaba }} burada da query de gönderdiğin parametreleri okur. -->

            <button @click="goBack">Geri Dön</button>
        </p>        
    </div>
</template>

<script>
export default {
    created() {
        //vue router ile ilgili bilgiye route ve router ile 2 farklı şekilde erişebiliriz.
        console.log(this.$route);
    },

    methods: {
        goBack(){
            this.$router.push("/"); //sayfa yönlendirmenin bir diğer yolu
        }
    },
}
</script>

