import {ref,onMounted} from "vue";

export default function(){

    const title=ref("Bu bir başlıktır");
    const counter=ref(0);
    const inc= ()=>{
      counter.value++;
    };
  
    const alertMe=(info)=>{
      console.log(info);
    }

    onMounted(()=>{
        console.log("Mounted çalıştı");
    });


    return {
        title,counter,inc,alertMe
    }
}