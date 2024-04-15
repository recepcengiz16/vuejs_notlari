import {ref,watchEffect} from "vue";

export default function(){
    const searchText=ref("");
    const isTyping=ref(false);

   const stop= watchEffect((onValidate)=>{
      //içerisinde fonks. çalıştırır. computed gibi çalışır ama watcher gibi davranır. İçerisinde bulunan değişkene göre tetikleniyor. Ve kapatabiliyorsun izlemeyi aşağıda(16. satırda) kendisini çağırarak

      if(searchText.value.length>0)
      {
          isTyping.value=true;

          const typing = setTimeout(()=>{
            isTyping.value=false;
            stop(); //kendisini call edince bir daha watch etmez
          },1500);

          onValidate(()=>clearTimeout(typing)); //watch effect çalıştıkça onvalidate yazığımız callback fonks. otomatik devreye giriyor.
      }
    })

    return {isTyping,searchText}

}