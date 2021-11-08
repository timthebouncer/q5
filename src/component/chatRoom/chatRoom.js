import React,{useState,useEffect} from 'react'
import './chatRoom.scss'
import formatDate from '../DateFormat/dateFormat'
import {useContextSelector} from "use-context-selector";
import {SocketContext} from "@/store/socketContext";



const ChatRoom=()=>{
  const [userInput, setUserInput] = useState('')
    const [msgList,sendMsg,sentAnswer]= useContextSelector(SocketContext,e=>[e.msgList,e.sendMsg,e.sentAnswer])


    const handleEnter=(e)=>{
        if(e.ctrlKey && e.key === 'Enter'){
            sentAnswer(userInput)
         setUserInput('')
       } else if(e.key === 'Enter'){
            sendMsg(userInput)
            setUserInput('')
       }
  }

  // const getTime=()=>{
  //
  //   let time = new Date()
  //   return formatDate(time);
  // }



  return(
    <div className='chatRoom-wrapper'>
      <div className='chat-content'>
        {
          msgList && msgList.map(item=>{
            return(
                <div style={{display:'flex'}} key={item.id}>
                    <div style={{marginRight:'10px'}}>{item.dateTime}</div>
                    <div>{item.from?.name + ':'}</div>
                    <div>{item.message}</div>
                </div>
            )
          })
        }
      </div>
      <div className='chat-input'>
        <input value={userInput} onChange={(e)=>setUserInput(e.target.value)} className='input' type="text" onKeyDown={handleEnter}/>
      </div>
    </div>
  )
}

export default ChatRoom
