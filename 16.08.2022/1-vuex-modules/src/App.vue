<template>
  <div>
      <p>
        {{$store.state.mainName}}
      </p>

      <p>
        {{$store.state.musteri.contactName}}
      </p>

      <p>
        {{musteriAdi}}
      </p>
  </div> 
</template>


<script>
import { mapGetters } from 'vuex';

export default {
    created() {
      console.log(this.$store);
      console.log(this.$store.getters["musteri/_contactName"]);//modullerde namespace verince getterslarda erişirken o namespace i de vermek gerekli
    },
    computed:{
      ...mapGetters({
          musteriAdi:"musteri/_contactName"
      })
    }
}



</script>