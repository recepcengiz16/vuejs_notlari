<template>
    <div>
        Deneme {{ props.counter }} <!-- direk counter yazınca da anlıyor. props.counter yazmana gerek yok -->
    
        {{ oddOrEvenMessage }}
    
    
    
    </div>
</template>

<script setup>
    import {computed,watch} from "vue";

    const props=defineProps({counter:Number}); // defineProps ile propsları alabiliyorum. 
    
    //const emit=defineEmits(["odd-event"]); bu şekilde de oluyor. hani option apide vardı ya emitleri dokümante olsun diye yazardık burada da o mana aslında
    const emit=defineEmits();

    const oddOrEvenMessage=computed(()=>props.counter %2 ==0 ? 'Çift':'Tek');

    watch(oddOrEvenMessage,(result)=>{
        if(result=='Tek') emit("odd-event",true);
    })


</script>