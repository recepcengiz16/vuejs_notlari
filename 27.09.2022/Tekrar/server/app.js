const socketio=require("socket.io");
const express=require("express");
const http=require("http");

const server=http.createServer(express); //sunucu express ile kuracak
const app=express();

const PORT=process.env.PORT || 1996;

const io=socketio(server,{
    cors:{
        origin:"*",
        methods: ["GET","POST","OPTIONS"]
    }
});//sunucu oluşturduk ve içine bir server bekler, 2. paramteresi de optionlar.


server.listen(PORT,()=>{
    io.on("connection",socket=>{ //yani biz gelen isteği on ile yakalıyoruz. Clientın attığı isteği
        console.log(socket);
    })
});