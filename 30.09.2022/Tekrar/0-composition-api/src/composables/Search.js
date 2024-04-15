import { ref,watchEffect } from "vue";

export default function() {
    const searchText=ref("");
    const isTyping=ref(false);


    const stop = watchEffect((onInValidate)=>{
        //içinde bulunan değişkene göre tetiklenir otomatik olarak

        if (searchText.value.length>0) {
          isTyping.value=true;

          const typing= setTimeout(() => {
            isTyping.value=false;
            stop(); //kendini çağırırsan bir daha watch etmez. Belki böyle durumlar da olabilir. Anlık izledin ve gerek kalmadı
          }, 1000);

          onInValidate(()=>clearInterval(typing)); //watcheffect tetiklendikçe çalışan bir callback fonks. ,isminin önemi yok ne vermek istersen

        }

      }) //aslında watch gibi çalışan ama daha fazla esneklik sağlayan bir yapı, içine fonks alır.


      return {isTyping,searchText}

}