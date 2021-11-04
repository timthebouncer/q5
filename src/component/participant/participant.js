import React from 'react'
import './participant.scss'
import Timer from "@/component/timer/timer";
import {useContextSelector} from "use-context-selector";
import {SocketContext} from "@/store/socketContext";

const Participant=()=>{
  const [userList]= useContextSelector(SocketContext,e=>[e.userList])

  return(
    <div>
      <div><Timer/></div>
        <div className="participant-wrapper">
          {
              userList && userList.map(item=>{
                  return(
                         <div key={item.id}>
                             <div className="rank">1</div>
                             <div className="gender">男</div>
                             <i className="status"></i>
                             <div className="name">{item.name}</div>
                             <div className="score">{item.score}</div>
                         </div>
                      )
              })
          }
        </div>
    </div>
  )
}

export default Participant
