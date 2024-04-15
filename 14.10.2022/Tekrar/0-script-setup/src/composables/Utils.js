import {ref,onMounted} from "vue";

export default function() {
    const title=ref("Bu bir başlık");
    const counter=ref(0);
  
    const inc= () => {
      counter.value++;
    };

    const alertMe= (data)=>{
        console.log(data);
    };

    onMounted(()=>{
        console.log("onMounted da çalışacaklar burada yer alıyor.");
    })

    return {
        title,
        counter,
        inc,
        alertMe
    }

}
