<template>
    <div>

          <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container">
            <a class="navbar-brand text-danger me-5" href="#page-top">HAYALİ DOSTLAR EVİ</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav">                  
                    <li class="nav-item" v-for="link in navList" :key="link">
                      <a class="nav-link text-warning me-5" :href="link.url">{{link.text}}</a></li>
                                    

                </ul>
            </div>
        </div>
    </nav>


    </div>
  
</template>


<script>
    export default {
        data() {
            return {
                navList:[
                    {text:"Ana Sayfa",url:"https://www.google.com.tr"},
                    {text:"Hakkımızda",url:"https://www.google.com.tr"},
                    {text:"Ürünler",url:"https://www.google.com.tr"},
                    {text:"İletişim",url:"https://www.google.com.tr"},
                   
                    ]
                }
            }
        }   

</script>