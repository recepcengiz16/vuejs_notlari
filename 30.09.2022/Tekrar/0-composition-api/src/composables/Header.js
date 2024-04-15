import { ref,computed } from "vue";

export default function() {
    const title=ref("Bu bir başlık");

    const titleLengthMessage=computed(()=>{
        return title.value.length +" adet karakter sayısı vardır."
    });
    
     //console.log(titleLengthMessage.value); //computed da da .value dememiz gerekli setup fonks içerisinde kullandığımızda

    return {
        title,
        titleLengthMessage
    }
}