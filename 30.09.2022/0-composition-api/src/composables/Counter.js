import {ref,computed,watch} from "vue";

export default function(){
    const counter=ref(0);
   

    const oddorEven=computed(()=> (counter.value %2==0 ? "Çift": "Tek")) //tek satır olunca return yazmazdık ya hani

    //watch([counter,oddorEven],(newValue,oldValue)=>{}) //1. parametre neyi izlicem, 2. paramtere ne olduğu: fonks dedik, 3. parametre de eğer obje ve arraylerde olunca deep kullanıyorduk. {deep:true}

    watch([counter,oddorEven],([newCounter,newoddorEven],[oldCounter,oldoddorEven])=>{
        console.log(oldCounter,"=>",newCounter)
        
      }); //1. parametreyi array yaptığımız için tek değerleri almak için array ile karşılığını veriyoruk ya yukıraki parametreleri tek tek aldığı yapıya çevirdik. Watch da reaktif olduğunu bildiği için değişkenleri counter.value diyerek kullanmadık. Refi reaktif olması için veriyorduk ya hani

      //option apide sadece bir tane değişken izleyebilirken composition apide birden fazlasını izleyebilir

    return {counter,oddorEven}
}