<template>
    <div>
        <div class="game-area">
           
            <h1 class="title">Boncuk <span>Nerede </span> <strong> ? </strong> </h1>
            <h4 class="description">Açık kartları seçtikten sonra, kapalı olan karta tıklayınız </h4>
            <div class="container">              
                <transition-group name="rotate-all" appear>
                    <app-card 
                        @click="selectedCard=card.id" v-for="card in cards" :card="card" :key="card.id" :class="{'shadow' : selectedCard==card.id}">
                    </app-card>
                </transition-group>
            </div>
            <div class="container">
                <transition name="rotate" mode="out-in">
                    <component :is="activeCard" @click="showCard(answer)" :card="answer">
                    </component>
                </transition>                
            </div>

        </div>
    </div>
</template>


<script>
import Card from './Card.vue';
import DefaultCard from './DefaultCard.vue'; 
export default {
    components:{
        appCard:Card,
        appDefault:DefaultCard
    },
    data() {
        return {
            answer:{},
            activeCard:"app-default",
            selectedCard:null,
            cards:[
                {id:1,component:"app-card",image:"card-1.jpg"},
                {id:2,component:"app-card",image:"card-2.jpg"},
                {id:3,component:"app-card",image:"card-3.jpg"},
                {id:4,component:"app-card",image:"card-4.jpg"},
                {id:5,component:"app-card",image:"card-5.jpg"} 
            ]
        }
    },
    created() {
        let answer=Math.ceil(Math.random()*this.cards.length);
        this.answer=this.cards[answer-1];
    },
    methods: {
        showCard(answer){

            if(this.selectedCard==null){
                alert("İlk olarak bir kart seçiniz.")
            }else{
                this.activeCard=answer.component;
                setTimeout(() => {
                    if(answer.id==this.selectedCard){
                        alert("Doğru cevap");
                        this.$emit("activeComponentEvent","app-celebrate");
                    }else{
                        alert("Yanlış cevap");
                        this.$emit("activeComponentEvent","app-failure");

                    } 
                }, 1000);
            }

        }
    },
}
</script>

<style scoped>

    .container{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 50px;
    }

    .title{
        text-align: center;
        
        color: rosybrown;
    }

    .title span{
        color:mediumpurple;
    }

    .title strong{
        color:darkred;
    }

    .description{
        text-align: center;
        color:grey;        
    }

    .shadow{
        box-shadow: 0px 5px 48px #30969f !important;
        transition: box-shadow .5s;
    }

    /* Açık kartların animasyonu için gerekli olan class tanımları */

    .rotate-all-enter-active{
        animation: rotate-all ease-in-out 2s forwards ; /* ease in out yavaş başla yavaş bit */
    }
    .rotate-all-leave-active{
        animation: rotate-all ease-in-out 2s forwards ;
    }

    .rotate-enter-active{
        animation: rotate-in .5s ease-in-out forwards;
    }
    .rotate-leave-active{
        animation: rotate-out .5s ease-in-out forwards;
    }


    @keyframes rotate-in{
        from{
            transform: rotateY(90deg);
        }
        to{
            transform: rotateY(0deg);
        }
    }

    @keyframes rotate-out{
        from{
            transform: rotateY(0deg);
        }
        to{
            transform: rotateY(90deg);
        }
    }

   
@keyframes rotate-all{
    from{
        transform: rotateY(0);
    }
    to{
        transform: rotateY(1080deg);
    }
}

</style>