const express = require('express')
const app = express();
const http = require('http')
const cors = require('cors');

const {Server } =  require('socket.io')



app.use(cors());

const server = http.createServer(app);
const io = new Server(server,{
    cors:{
        origin: "http://localhost:3000",
        methods: ["GET","POST"],
    },
})

// Initialize connection. Any socket.packeg that comes if not under "Connection", it will not be wellcome 
io.on("connection", (socket)=>{// note that "connection" is all lower case
    console.log("The socket id is", socket.id)
    socket.on("join-room",(data)=>{
        socket.join(data)
        console.log(data.userName, "wants to join",data.roomId )
    })
    socket.on("sending-msg",(data)=>{
        console.log(data.userName,": ",data.msg)
    }
    )
    // When the user disconnects, print the id of that user
    socket.on("Disconnection", ()=>{
        console.log("The user", socket.id," just disconnected")
    })
})


server.listen(4000, ()=>{
    console.log("SERVER RUNNING ON 4000")
}) 