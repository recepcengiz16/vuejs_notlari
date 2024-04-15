<template>
  <div class="w-screen h-100 bg-gray-800 flex flex-row text-white items-start justify-center">
   <appSidebar :invoices="invoviceList" :editInvoice="editInvoice"></appSidebar>
    <invoice-content :saveInvoice="saveInvoice" :activeInvoice="state.activeInvoice"></invoice-content>
  </div>
</template>

<script setup>
  import { ref,reactive } from 'vue';
import appSidebar from './components/appSidebar.vue';
  import invoiceContent from "./components/invoiceContent.vue";
  
  const invoviceList=ref([]);
  const state=reactive({activeInvoice:null});
  const saveInvoice= (invoice)=>{
      invoviceList.value.push(invoice);
  };

  const editInvoice=(invoice)=>{
    console.log(invoice);
    state.activeInvoice=invoice;
  };

</script>