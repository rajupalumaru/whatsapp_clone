import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react';
import './SidebarChat.css'

const SidebarChat = ({ addNewChat }) => {
    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed((Math.floor(Math.random() * 5000)))
    }, [])

     const createChat=()=>{
        const Roomname=prompt("please enter name for chat");

        if(Roomname){
          //do some database stuff
        }

     }

    return !addNewChat ? (
        <div className='sidebarChat'>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className='sidebarChat_info'>
                <h2>Room Name</h2>
                <p>Last Message..</p>
            </div>

        </div>) : (
        <div className='sidebarChat' onClick={createChat}>
           <h2>Add New Chat</h2>
        </div>

    )

}

export default SidebarChat
