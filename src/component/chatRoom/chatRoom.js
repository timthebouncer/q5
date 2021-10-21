import React,{useState,useEffect} from 'react'
import './chatRoom.scss'
import formatDate from '../DateFormat/dateFormat'



const ChatRoom=({ws})=>{
  const [userInput, setUserInput] = useState('')
  const [userInputList, setUserInputList] = useState([])

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


  useEffect(()=>{
    if(ws){
      //連線成功在 console 中打印訊息
      console.log('success connect!')
      //設定監聽
      initWebSocket()
    }
  },[ws])

  const initWebSocket = () => {

    ws.on('getMessageAll', message => {
      console.log(message)
    })
    ws.on('getMessageLess', message => {
      console.log(message)
    })
  }

  const sendMessage = (name,val) => {
    ws.emit(name, val)
  }

  return(
    <div className='chatRoom-wrapper'>
      <div className='chat-content'>
        {
          userInputList && userInputList.map(item =>{
            return  (
              <div>
                <span style={{marginRight:'10px'}}>
                  {item.time}
                </span>
                <span>
                  {item.text}
                </span>
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
