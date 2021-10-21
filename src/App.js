import React, { useState, useEffect } from 'react'
import './App.css';
import Participant from "@/component/participant/participant";
import Question from "@/component/question/question"
import ChatRoom from "@/component/chatRoom/chatRoom"
import ReactDom from 'react-dom'
import webSocket from 'socket.io-client'

function App() {


  const [ws,setWs] = useState(null)

  const connectWebSocket = () => {
    //開啟
    setWs(webSocket('http://localhost:3000'))
  }
  //
  // useEffect(()=>{
  //   if(ws){
  //     //連線成功在 console 中打印訊息
  //     console.log('success connect!')
  //     //設定監聽
  //     initWebSocket()
  //   }
  // },[ws])
  //
  // const initWebSocket = () => {
  //
  //   ws.on('getMessageAll', message => {
  //     console.log(message)
  //   })
  //   ws.on('getMessageLess', message => {
  //     console.log(message)
  //   })
  // }

  // const sendMessage = (name) => {
  //   ws.emit(name, '收到訊息囉！')
  // }

  return (
    <div className="App">
      <input type='button' value='連線' onClick={connectWebSocket} />
      {/*<input type='button' value='送出訊息，讓所有人收到回傳' onClick={() => { sendMessage('getMessageAll') }} />*/}
      {/*<input type='button' value='送出訊息，除了自己外所有人收到回傳' onClick={() => { sendMessage('getMessageLess') }} />*/}
      <div className="participant">
        <Participant />
      </div>
      <div className="question">
        <Question />
      </div>
      <div className="chatRoom">
        <ChatRoom ws={ws} />
      </div>

    </div>
  );
}

export default App;
