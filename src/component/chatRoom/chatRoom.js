import React,{useState,useEffect} from 'react'
import './chatRoom.scss'
import formatDate from '../DateFormat/dateFormat'
import {useContextSelector} from "use-context-selector";
import {SocketContext} from "@/store/socketContext";



const ChatRoom=()=>{
  const [userInput, setUserInput] = useState('')
  const [userInputList, setUserInputList] = useState([])
    // const [msgList]= useContextSelector(SocketContext,e=>[e])

    // console.log(msgList)
    const handleEnter=(e)=>{
       if(e.key === 'Enter'){
         setUserInputList([...userInputList, {time: getTime(),text: userInput}])
         sendMessage('getMessageLess',userInputList)
         setUserInput('')
       }
  }

  const getTime=()=>{

    let time = new Date()
    return formatDate(time);
  }


  const sendMessage = (name,val) => {
    // ws.emit(name, val)
  }

  return(
    <div className='chatRoom-wrapper'>
      <div className='chat-content'>
        {/*{*/}
        {/*  msgList && msgList.map(item=>{*/}
        {/*    return(*/}
        {/*        <div style={{display:'flex'}} key={item.id}>*/}
        {/*            <div style={{marginRight:'10px'}}>{item.dateTime}</div>*/}
        {/*            <div>{item.message}</div>*/}
        {/*        </div>*/}
        {/*    )*/}
        {/*  })*/}
        {/*}*/}
      </div>
      <div className='chat-input'>
        <input value={userInput} onChange={(e)=>setUserInput(e.target.value)} className='input' type="text" onKeyDown={handleEnter}/>
      </div>
    </div>
  )
}

export default ChatRoom
