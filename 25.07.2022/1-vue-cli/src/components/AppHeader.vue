<template>
    <div>
        <header>Kablosuz kedi</header>
        <!-- scoped ile sadece css kodları sadece bu sayfayı etkileyecek olmuş oluyor. yoksa diğer sayfada da header ve headera ait css kodları olmuş olsa hangi komponent son ise en son o css çalışırdı -->
    </div>
</template>

 
<style scoped> 
    header{
        background-color: rebeccapurple;
        color:#fff;
        display: grid;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 50px;
        border-bottom: 2px solid rgb(73, 240, 218);
    }

</style>