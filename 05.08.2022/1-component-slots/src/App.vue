<template>
  <div>
    <!-- <Modal :onSave="onSave"></Modal> -->
    
    <modal-example :onSave="onSave">
       <template #title>
           <h3>Benim slot ile gelen title bilgisi</h3> <!-- Slotlar,componentler arasında html elementleri taşıyabildiğimiz vue js tarafından oluşturulan özel html tag’idir. Göndermek istediğin component tagleri arasında(burada modal companenti) template içinde # ile isim vererek componentin sayfasında slot name ile çağırıyorsun -->
       </template>

       <template #content>  <!-- v-slot:content ile #content aynı şey. v-slot da yazabilirsin -->
          <p class="text-primary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis veritatis quibusdam, officiis rem, magnam eum corporis incidunt minus praesentium eaque adipisci accusamus cumque doloremque repudiandae? Molestias quos quo ullam cupiditate.
          </p>
       </template>

       <template #default> <!-- ne olursa olsun default bir bilgi varsa -->
            Bu default olarak gösterilecek
       </template>
    </modal-example>
  </div>
</template>

<script>  

  import Modal from '@/components/Modal.vue'
  export default{
    components:{
      ModalExample:Modal
    },
    methods: {
      onSave(){
        alert("Kaydedildi");
      }
    },
  }

</script>