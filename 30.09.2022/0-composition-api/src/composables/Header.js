//composablesı kendimiz elle oluşturduk.

import {ref, computed} from  "vue"; //reaktif bir değişken tanımlamamızı sağlıyor ref, computed ve watch tanımlamak gerekli burada kullanmak için 

export default function(){
     // const title="Bu bir setup başlığıdır."; reaktif bir değişken değilse bu şekilde reaktif olacaksa tanımlanması değişiyor.
     const title=ref("Bu bir başlıktır."); //ref in içerisinde yazarsak reaktif olmuş oluyor

     const titleLengthMessage=computed(()=>{
        return title.value.length + " adet karakter sayısı vardır."
      });

       
       console.log(titleLengthMessage.value); //bu da bir obje oldu için içindeki değere script tarafında erişmek için value diye içindeki değere erişebilmemizi sağlar.

      return {title,titleLengthMessage}
}