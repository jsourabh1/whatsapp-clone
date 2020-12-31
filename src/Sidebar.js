import React, {useEffect, useState} from 'react'
import './Sidebar.css'
import {Avatar,IconButton} from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import Sidebar_chat from "./Sidebarchat";
import db from "./firebase";

function Sidebar()
{
    const [rooms,setrooms]=useState([]);
    useEffect(() => {
        db.collection('rooms').onSnapshot(snapshot => {
            setrooms(snapshot.docs.map(doc=>({
                id:doc.id,
                data:doc.data(),

            }))
            )
        })

    }, []);

    return (
        <div className='sidebar'>
            <div className='sidebar_header'>
            <Avatar/>
            <div className='sidebar_header_right'>
                <IconButton>
                <DonutLargeIcon/>
                </IconButton>
                <IconButton>
                <ChatIcon/>
                </IconButton>
                <IconButton>
                <MoreVertIcon/>
                </IconButton>

            </div>
            </div>
            <div className='sidebar_search'>
                <div className='sidebar_search_container'>
                    <SearchIcon/>
                    <input name='search_bar' placeholder='Search or Start a new chat' type='text'/>
                </div>

            </div>

            <div className='sidebar_chat'>
                {/* eslint-disable-next-line react/jsx-pascal-case */}
               <Sidebar_chat addNewChat/>
                {rooms.map(room =>(
                    // eslint-disable-next-line react/jsx-pascal-case
                    <Sidebar_chat key={room.id} id={room.id} name={room.data.name}/>
                ))}
               
            </div>


        </div>

    );
}
export default Sidebar;