<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #563F7A">
    <router-link :to="" class="navbar-brand" :tag="a"></router-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">

            <router-link active-class="active" :to="/urun-islemleri" :tag="li" class="nav-item">Ürün İşlemleri</router-link>
            <router-link active-class="active" :to="/urun-urun-cikisi" :tag="li" class="nav-item">Ürün Çıkışı</router-link>


           
           
        </ul>
    </div>
</nav>
    </div>
</template>