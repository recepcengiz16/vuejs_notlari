<template>
    <div>
        <div class="container">
            <h1>Tebrikler bildiniz  </h1>
            <button @click="newGame">Yeni Oyun</button>
        </div>
    </div>
</template>


<script>
    export default {
        methods: {
            newGame(){
                this.$emit("activeComponentEvent","app-game-cards");
            }
        },
    }
</script>

<style scoped>

.container{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   
}

.container h1{
    text-align: center;
    font-size: 333%;
    color:darkgreen;
    opacity: .5;
}

.container button{
    cursor: pointer;
    width: 200px;
    background-color: #fff;
    color:darkred;
    border: 1px solid darkgreen;
    height: 50px;
    font-size: 15px;
    border-radius: 5px;
    outline: none;
    transition: all .5s;

}

.container button:hover{
    background-color: darkgreen;
    color:#fff;
    transition: all .5s;
}

</style>