const { createApp, ref } = Vue

const app=createApp({

    setup(){
        
        const message=ref("Merhaba Recep");
        const isDisabled=ref(true); 

        const alertMessage=()=> alert("Merhaba");

        return {
            message,
            isDisabled,
            alertMessage
        }
    }
}); 


app.config.errorHandler=(error)=>{
    console.log(error.message);
}

app.mount("#app");