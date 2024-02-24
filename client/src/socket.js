import { io } from "socket.io-client";
const URL = process.env.NODE_ENV === 'production'? undefined:'http://localhost:4000';
// export  const socket = io(URL,{
//     autoConnect:false
// })
export  const socket = io(URL,{
    transports: ["websocket"],
    reconnection: true,
    autoConnect: true,
})