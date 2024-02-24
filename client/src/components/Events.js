import React from "react";
export function Events({events}){
    return(
        <ul>
        {
            events.map((event, index)=>
                <li key={index}>{events}</li>
            )
        }
        </ul>
    );
}