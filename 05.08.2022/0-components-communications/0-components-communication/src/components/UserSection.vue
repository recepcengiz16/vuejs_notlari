<template>
    <div>
       <!-- <ListSection :items="items"></ListSection> -->
       <ListSection></ListSection>
<!-- childdan parenta bilgi göndermek için custom event göndeririz -->
       <!-- <add-section @new-item="$emit('new-item',$event)"></add-section> -->
       <add-section></add-section>
        
    </div>
</template>


<script>
   import ListSection from '@/components/ListSection.vue'
   import AddSection from '@/components/AddSection.vue'
   export default {
        props:["items"],
        components:{
            ListSection,
            AddSection
        }

    }

</script>