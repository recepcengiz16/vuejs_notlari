<template>
  <div>
    <!-- tek store üzerinden uygulamayı kontrol etmek karmaşaya yol açar. İşte bu noktada modüllere ayırıp daha sonra bir noktada birleştirmemiz gerekiyor. -->

    <p>
      {{ $store.state.mainName }} <br>

      {{ $store.state.musteri.contactName }} <br>

      <pre>
        {{ musteriAdi }}
      </pre>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    created() {
      console.log(this.$store.getters["musteri/_contactName"]); //mutation action ve getterda module ismi gelmiyor. O yüzden namespaced true verdik hepsine. Sadece state de kendiliğinden module ismi de geliyor

      this.$store.commit("musteri/setItem","Hayalet"); //bu şekilde de bu commiti çalıştır demiş olduk.
    },
    computed:{
      ...mapGetters({
        musteriAdi:"musteri/_contactName" //bu computed nerede musteri(index.js de musteri olarak tanımladık contact.js i) altındaki _contactName den alıcam
      }),
      
    }
}
</script>