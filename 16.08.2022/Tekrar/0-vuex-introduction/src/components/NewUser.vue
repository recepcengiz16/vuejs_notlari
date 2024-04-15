<template>
    <div>
        <button class="btn btn-success" @click="updateFullname">Fullname i değiştir</button>
    </div>
</template>

<script>
export default {
    methods: {
        updateFullname(){
            const userData={id:new Date().getTime(),title:"Raf",type:"Mobilya"};
            this.$store.commit("newItem",userData);//commit store içindeki bir mutationı tetikler. Göndereceğin bilgi de budur
            this.$store.dispatch("newItem",userData); //store içindeki bir actionı tetikler edilir.
          this.$store.state.fullname="Emiş";
         // this.$store.state.itemList.push({id:new Date().getTime(),title:"Raf",type:"Mobilya"});
        }
      },
}

</script>