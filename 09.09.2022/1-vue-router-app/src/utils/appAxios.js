//sürekli urllerle uğraşmamak için bu dosyayı oluşturduk. Hani biz program cs de bir kere base url ve tipini veriyorduk ya o işte
import axios from "axios";

export const appAxios=axios.create({
    
    baseURL:"http://localhost:3000",
    
    withCredentials:false, // Axios ile yapılan HTTP isteklerinde kullanılan bir özelliktir. Bu özellik, çerezleri (cookies) ve kimlik doğrulama bilgilerini (credentials) istekle birlikte gönderip göndermeyeceğinizi kontrol eder.

    headers:{
        tokenX:"myToken",
        "Content-type":"application/json"
    }
});