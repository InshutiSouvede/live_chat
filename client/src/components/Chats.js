// Here is where we will use or chat sockets
import React, { useState } from "react";
export function Chats({socket, username, roomId}){
    const [currentMsg, setCurrentMsg] = useState('')
    const [isloading, setIsloading] = useState(false)
    const sendMsg = async()=>{
        if(currentMsg !== ''){
            setIsloading(true)
            const msgData = {
                msg:currentMsg,
                userName:username,
                roomId: roomId,
                time: new Date(Date.now()).getHours()+":"+new Date(Date.now()).getMinutes()
            }
            await socket.timeout(5000).emit("sending-msg",msgData,()=>{
            setIsloading(false)
        })
        }
        
    }
    return (
        <div>
            <div className="header">
                <h4>Chatting Here</h4>
            </div>
            <div className="bosy"></div>
            <div className="footer">
                <input type="text" name="msg" placeholder="Hey" onChange={e=>setCurrentMsg(e.target.value)}/>
                <button onClick={sendMsg} disabled={isloading}>&#9658;</button>
            </div>
        </div>
    );
}