import React from 'react'
import './App.css';
import Participant from "@/component/participant/participant";
import Question from "@/component/question/question"
import ChatRoom from "@/component/chatRoom/chatRoom"

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
