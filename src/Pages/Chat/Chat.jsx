import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import './Chat.scss'
import Messages from '../Messages/Messages';

const Chat = () => {
  return (
    <div className='chat-container'>
        <div className="chat-container-header">
            <div className="chat-user-info">
                <div className="chat-user-img">
                    <PersonIcon/>
                </div>
                <p>Asadbek</p>
            </div>

            {/* btn */}
            <div className="chat-container-header-btn">
                <MoreVertIcon/>
            </div>
        </div>

        {/* center */}
        <div className="chat-display-container">
            <Messages
                text='Lorem ipsum dolor sit amet.'
                date='31-03-2023'
            />
            <Messages
                text='Lorem ipsum dolor sit amet.'
                date='31-03-2023'
            />
            <Messages
                text='Lorem ipsum dolor sit amet.'
                date='31-03-2023'
            />
        </div>
        {/* bottom input */}

        <div className="chat-input">
            {/* button */}
            <div className="chat-input-btn">
                <InsertEmoticonIcon/>
                <AttachFileIcon/>
            </div>
            {/* input */}
            <form>
                <input type="text" placeholder='message...' />
            </form>
            {/* send */}
            <div className="chat-input-send-btn">
                <SendIcon/>
            </div>
        </div>

    </div>
  )
}

export default Chat