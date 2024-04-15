<template>
    <section class="bg-gray-900  w-1/3 mx-auto my-10 p-2 px-5 rounded-md shadow-2xl">
      <!-- FAtura Bilgileri -->
      <contact-section :contact="state.contact"></contact-section>
      
     

      <div class="mt-5">
        <heading title="Fatura Kalemleri"></heading>
        <invoiceItems :items="state.items" :AddInvoiceItem="AddInvoiceItem"></invoiceItems>
      </div>
     
      <invoiceSummary :items="state.items"></invoiceSummary>

      <hr class="bg-gradient-to-r h-[1px] border-none from-gray-700 mt-5" />
      <div class="actionbar text-right my-5">
        <button @click="onSubmit" class="purple-button">Kaydet</button>
      </div>
    </section>
</template>

<script setup>
  import invoiceItems from './invoiceItems.vue';
  import invoiceSummary from './invoiceSummary.vue'; 
  import contactSection from './contactSection.vue'; 

  import { reactive,provide,watch } from 'vue';

  const props=defineProps({saveInvoice:Function, activeInvoice:[Object,null]}) //object ya da null olabilir
  
  const state=reactive({
      id:null,
      created_at:null,
      contact:{
        contact_name:null,
        email:null,
        city:null,
        country:null,
        zipCode:null
        
      },
      
      items:[]
  });

  const AddInvoiceItem = () => {
    state.items.push({
      id:new Date().getTime(),
      name:null,
      qty:null,
      unit_price:0.0,
      total_price:0.0
    });
  }

  const deleteInvoiceItem = (invoiceItem) => {
    console.log(invoiceItem);
    state.items =state.items.filter(x=>x.id!=invoiceItem.id);
  };

  provide("deleteInvoiceItem",deleteInvoiceItem);

  const onSubmit= ()=> {
      props.saveInvoice({...state,created_at:new Date(),id:new Date().getTime()});
      state.contact={
        contact_name:null,
        email:null,
        city:null,
        country:null,
        zipCode:null
        
      };

      state.items=[];
  };

  watch(()=>props.activeInvoice,(activeInvoice)=>{
      console.log(activeInvoice);

      if (activeInvoice) {
        state.contact={...activeInvoice.contact};
        state.items=[...activeInvoice.items];
      }
  });
  
</script>