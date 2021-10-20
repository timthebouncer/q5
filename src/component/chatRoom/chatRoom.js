import React from 'react'
import './chatRoom.scss'

const ChatRoom=()=>{
  return(
    <div className='chatRoom-wrapper'>
      <div className='chat-content'></div>
      <div className='chat-input'>
        <input className='input' type="text"/>
      </div>
    </div>
  )
}

export default ChatRoom
