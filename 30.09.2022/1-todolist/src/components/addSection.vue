<template>
        <section class="mt-4">
          <input @keydown.enter="newItem" type="text" class="rounded-md p-1.5" placeholder="İçerik">
       </section>
</template>

<script>
   export default {
      props:{
        Addtodo:Function
      },
      setup(props){
         const newItem=(event)=>{
              props.Addtodo(event.target.value);
              event.target.value="";
         };

         return { newItem }
      }
   }
</script>