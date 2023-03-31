import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import MoreVertIcon from '@mui/icons-material/MoreVert';
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
            <Messages/>
        </div>
        {/* bottom input */}

    </div>
  )
}

export default Chat