import React, {useEffect, useState} from 'react'
import {Avatar, IconButton} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import './Chat.css'
import {useParams} from "react-router-dom";
import  MicIcon from "@material-ui/icons/Mic";
import db from "./firebase";
function Chat(){
    const [seed,setseed]=useState("")
    const {roomId}=useParams();
    const [roomName,setRoomName]=useState("");
    useEffect(()=>{
        setseed(Math.floor(Math.random()*5000))
    },[roomId])
    const[input,setinput]=useState("")
    //its function is to save thee input message in the variable
    const sendMessage=(e)=>{
        e.preventDefault()
        console.log(input)
        setinput("")
    };
    console.log(roomId)

    useEffect(()=>{
        if (roomId){
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
                setRoomName(snapshot.data().name))
            )
        }
        }
    ,[roomId])
    return (
        <div className='chat'>
            <div className='chat_header'>
                <Avatar src={`https://avatars.dicebear.com/api/human/a23${seed}.svg`}/>
                <div className='chat_header_info'>
                    <h3>{roomName}</h3>
                    <p>last seen.........</p>
                </div>
                <div className='header_icons'>
                    <IconButton>
                        <SearchIcon/>
                    </IconButton>

                    <IconButton>
                        <AttachFileIcon/>
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>



            <div className='chat_body'>
                <p className={`chat_send ${true && `chat_receiver`}`}>
                    <span className="chat_name">saurabh</span>
                    hii guys
                    <span className='time_stamp'>
                        3.55pm
                    </span>
                </p>
            </div>
            <div className='chat_footer'>
                <InsertEmoticonIcon/>
                <form>
                    <input type='text' value={input} onChange={(e)=>setinput(e.target.value)} placeholder="Type a message"/>
                    <button onClick={sendMessage} type="submit" ><span>Send</span></button>

                </form>
                <MicIcon/>

            </div>
        </div>
    )
}
export default Chat;