import { ref,computed,watch } from "vue";

export default function () {

  const counter=ref(0);
  const OddOrEven=computed(()=>{
    return counter.value %2 == 0 ? "Çift":"Tek"
  });

  watch([counter,OddOrEven], ( [newCounter,newOddOrEven],[oldCounter,oldOddOrEven] ) => { //Dizi şeklinde tek bir yapı altında izlemek istediklerimizi çoklu bir şekilde ele alabiliyoruz. Destractive yapı ile de fonks içinde o yapıları ele aldık.

    console.log('newCounter :>> ', newCounter);
    console.log('oldCounter :>> ', oldCounter);

    console.log('newOddOrEven :>> ', newOddOrEven);
    console.log('oldOddOrEven :>> ', oldOddOrEven);

  }) // 3. paramtere de watchda array ve obje izlemek için {deep:true} yazarız

  return {counter,OddOrEven};
}