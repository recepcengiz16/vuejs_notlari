<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand">AuthApp</a> 
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">       
                <li class="nav-item">
                  <router-link to="/" class="nav-link">Ana Sayfa</router-link>
                  
                </li>
                <li class="nav-item">
                  <router-link to="/" class="nav-link">Kullanıcılar</router-link>
                  
                </li>
          
              </ul>
              <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
    </div>
</template>

<script setup>
</script>