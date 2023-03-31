import React from 'react' 
import './Messages.scss'

const Messages = ({text , date}) => {
  return (
    <div className='chat-message'>
        <div className="chat-message-text">
            <p>{text}</p>
        </div>
        <div className="chat-message-date">
            <p>{date}</p>
        </div>
    </div>
  )
}

export default Messages