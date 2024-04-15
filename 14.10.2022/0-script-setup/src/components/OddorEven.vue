<template>
    <div>
        <h3>Burası başlıktır</h3>
        {{counter}} Tek-Çift: {{result}}
       
    </div>
</template>

<script setup>
    import {computed,watch} from "vue";

    const props=defineProps({counter:Number});
    const emit=defineEmits();

    const result=computed(()=>(
        props.counter % 2 == 0 ? "Çift":"Tek"
    ));

    watch(result,(res)=>{
        if(res==="Tek") emit("odd-event",true);
    })

</script>