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
        //socket burada beinmle bağlanyıyı kuran arkadaş
        console.log(socket);

        socket.emit("WELCOME_MESSAGE",`OOO ${socket.id} kardeşim ojgeldin`);
        socket.on("SEND_MESSAGE",(data)=>{
            console.log("Mesaj geldi",data);
        });

        socket.on("NEW_BOOKMARK_EVENT",data=>{
            console.log(data);
            socket.broadcast.emit("NEW_BOOKMARK_ADDED",data);//gönderen hariç herkese 
        })
    })
});