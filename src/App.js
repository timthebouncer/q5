import React, { useState, useEffect } from 'react'
import './App.css';
import Participant from "@/component/participant/participant";
import Question from "@/component/question/question"
import ChatRoom from "@/component/chatRoom/chatRoom"
import ReactDom from 'react-dom'
import webSocket,{io, Socket} from 'socket.io-client'

function App() {


  return (
    <div className="App">
      <div className="participant">
        <Participant />
      </div>
      <div className="question">
        <Question />
      </div>
      <div className="chatRoom">
        <ChatRoom />
      </div>

    </div>
  );
}

export default App;
