<template>
  <div>
    <transition name="slideContainer" mode="out-in">
      <component @activeComponentEvent="activeComponent=$event" :is="activeComponent"></component>
    </transition>
  </div>
</template>

<script>

import Celebrate from './components/Celebrate.vue';
import Failure from './components/Failure.vue';
import GameCards from './components/GameCards.vue';

export default {
  data() {
    return {
      activeComponent:"appGameCards"
    }
  },
  components:{
    appGameCards:GameCards,
    appCelebrate:Celebrate,
    appFailure:Failure
  }

}
</script>

<style>
body{
  font-family: sans-serif;
}

.slideContainer-enter-active{
        animation: slide-in .3s ease-in-out forwards;
    }
.slideContainer-leave-active{
        animation: slide-out .3s ease-in-out forwards;
    }

@keyframes slide-in{
  from{
    transform: translateX(-1000px);
    opacity: 0;
  }
  to{
    transform: translateX(0px);
    opacity: 1;
  }
}

@keyframes slide-out{
  from{
    transform: translateX(0px);
    opacity: 1;
  }
  to{
    transform: translateX(1000px);
    opacity: 0;
  }
}

</style>