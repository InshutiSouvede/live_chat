import React, { useState } from "react";

import { socket } from "../socket";

export function MyForm(){
    const [roomId, setRoomId] = useState('')
    const [userName, setUserName] = useState('')
    const [isloading, setIsloading] = useState(false);

    function onSubmit(event){
        event.preventDefault();
        setIsloading(true);
        socket.timeout(5000).emit("join-room", {roomId,userName},()=>{
            setIsloading(false)
        })
    }
    return(
        <form onSubmit={onSubmit}>
            <input type="text" name="userName" placeholder="John Doe" onChange={event=> setUserName(event.target.value)}/>
            <input type="text" name="roomId" placeholder="Room ID" onChange={event=> setRoomId(event.target.value)}/>
            <button type="submit" disabled={isloading}>Join</button>
        </form>
    )
}