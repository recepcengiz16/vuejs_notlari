<template>
    <div>
        <h3>Burası başlıktır</h3>
        {{counter}} Tek-Çift: {{result}}
       
    </div>
</template>

<script setup>
    import {computed,watch} from "vue";

    const props=defineProps({counter:Number}); //script setup: Vue 3'ün script setup API'si, setup aşamasında kullanılan defineProps, defineEmits, defineExpose gibi fonksiyonları otomatik olarak tanır ve bu nedenle bunları import etmeniz gerekmez.
    const emit=defineEmits();

    const result=computed(()=>(
        props.counter % 2 == 0 ? "Çift":"Tek"
    ));

    watch(result,(res)=>{
        if(res==="Tek") emit("odd-event",true);
    })

</script>