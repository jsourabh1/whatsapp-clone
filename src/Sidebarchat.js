import React, {useEffect, useState} from 'react'
import './Sidebarchat.css'
import {Avatar} from "@material-ui/core";
import db from "./firebase";
import {Link} from "react-router-dom";
function Sidebar_chat({ id, name,addNewChat})
{
    const [seed,setseed]=useState("");
    useEffect(() =>{
        setseed(Math.floor(Math.random()*5000))
    },[])
    const createChat=()=>{
        const room=prompt("please enter the name of the room");
        if (room)
        {
            //we do something here from the data base
            db.collection('rooms').add({
                name:room,
        })
        }
    };
    return !addNewChat?(<Link to={`/rooms/${id}`}>
        <div className='sidebar_chat'>

            < Avatar src={`https://avatars.dicebear.com/api/human/a23${seed}.svg`}/>
            <h2>{name}</h2>
            <p>Last message....</p>

        </div>
    </Link>):(<div className='addnew' onClick={createChat}>
            <h2>Add New chat</h2>

        </div>)
};
export  default Sidebar_chat;