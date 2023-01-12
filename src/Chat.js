import { Avatar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './Chat.css';
import { IconButton } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import axios from 'axios';

const Chat = () => {
    const [input, setInput] = useState("");
    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed((Math.floor(Math.random() * 5000)))
    }, [])

    const SendMessage = (e) => {
        e.preventDefault();
        console.log("type",input);
        axios.post("https://whats-app-clone-7a272-default-rtdb.firebaseio.com/register.json",input)
        .then(() => alert("submitted successfully"))
        setInput("");
    }

    return (
        <div className='chat'>
            <div className='chat_header'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className='chat_headerInfo'>
                    <h3>Room Name</h3>
                    <p>Last Seen  at ....</p>
                </div>
                <div className='chat_headerRight'>
                    <IconButton>
                        <SearchOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>

                </div>
            </div>
            <div className='chat_body'>
                <p className={`chat_message ${true && 'chat_reciever'}`}>
                    <span className='chat_name'>Raju Palumaru</span>
                    Hey Guys
                    <span className='chat_timestamp'>
                        3:52pm
                    </span>
                </p>
            </div>
            <div className='chat_footer'>
                <InsertEmoticonIcon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} placeholder='Type a message' type='text' />
                    <button onClick={SendMessage} type="submit">Send Message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
