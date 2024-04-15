<template>
    <div>
        <button @click="updateName" class="btn btn-success btn-sm">Yeni Item Ekle</button>
    </div>
</template>

<script>
export default{
     methods: {
      updateName(){//commit bir mutationı çağırır,tetikler. 

        const userData={id:10,title:"Kanepe",type:"Mobilya"};

        // this.$store.commit("newItem",{
        //     id:8,title:"Sunta",type:"Mobilya"
        // }) commit mutationı çağırıyor.
        
        this.$store.dispatch("newItem",userData); //actionu çağırmak için
        this.$store.state.fullName=new Date().getTime();
      }
    },
}

</script>