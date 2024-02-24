import React, { useEffect, useState } from "react";
// import { socket } from "./socket";
// import { ConnectionManager } from "./components/ConnectionManager";
// import { ConnectionState } from "./components/ConnectionState";
// import { Events } from "./components/Events";
import { MyForm } from "./components/MyForm";

export default function App(){
  // This contain connection management onfo, which we will ignore for now
  // const [isConnected, setIsConnected] = useState(socket.connected);
  // const [fooEvents,setFooEvents]  = useState([]);
  // useEffect(()=>{
  //   function onConnect(){
  //     setIsConnected(true)
  //   }
  //   function onDisconnect(){
  //     setIsConnected(false)
  //   }
  //   function onFooEvent(value){
  //     // Add the event value to the previous brocken into array
  //     setFooEvents(previous=>[...previous,value])
  //   }
  //   // Now our listen on our socket
  //   socket.on('connect',onConnect)
  //   socket.on('disonnect',onDisconnect)
  //   socket.on('foo',onFooEvent)
  //   // Return function on render
  //   return()=>{
  //     socket.off('connect',onConnect)
  //     socket.off('disonnect',onDisconnect)
  //     socket.off('foo',onFooEvent)
  //   };
  // },[]);

  return(
    <div className="App">
      {/* Events and connection management is not needed for now */}
      {/* <ConnectionState isConnected={isConnected} />
      <Events events={fooEvents} />
      <ConnectionManager /> */}
      <h1>Live chat</h1>
      <MyForm />
    </div>
  )
}