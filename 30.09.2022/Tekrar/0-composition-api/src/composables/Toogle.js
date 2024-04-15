import { ref } from "vue";

export default function() {
    const show=ref(false);

    const toogleIt=()=>{
        show.value=!show.value; // show da bize ref bir obje döner. Biz değere ulaşmak için .value ile ulaşırız.
    }

    return {show,toogleIt};
}