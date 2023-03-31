import React from 'react'
import Sidebar from '../../Pages/Sidebar'
import Chat from '../../Pages/Chat/Chat'
import './ChatPages.scss'

const ChatPages = () => {
  return (
    <div className='chatPages'>
      <div className="chatpage-container">
        {/* sidebar */}
        <Sidebar/>
        {/* chatpage */}
        <Chat/>
      </div>
    </div>
  )
}

export default ChatPages