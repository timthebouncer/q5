import React from 'react'
import './participant.scss'
import Timer from "@/component/timer/timer";
import {useContextSelector} from "use-context-selector";
import {SocketContext} from "@/store/socketContext";
import {LikeOutlined,DislikeOutlined} from '@ant-design/icons'

const Participant=()=>{
  const [userList,giveALike,giveADislike]= useContextSelector(SocketContext,e=>[e.userList,e.giveALike,e.giveADislike])
  const mySelf = localStorage.getItem('myId')

  return(
    <div>
      <div><Timer/></div>
        <div className="participant-wrapper">
          {
              userList && userList.map(item=>{
                  return(
                         <div key={item.id}>
                             <div className="rank">1</div>
                              <div className='userInfo'>
                                <div className="gender">男</div>
                                <div className={item.online ? 'statusOn' : 'statusOff'}/>
                                <div className='rightPart'>
                                  <div style={{display:'flex', marginBottom: '-15px'}}>
                                    <div className="name">{item.name}</div>
                                    <div className="score">{item.score}</div>
                                  </div>
                                  {
                                    mySelf !== item.id ?(
                                        <div className='action'>
                                          <div className='like' onClick={()=>giveALike('Good',item.id)}><LikeOutlined /></div>
                                          <div className='unlike' onClick={()=>giveADislike('Bad',item.id)}><DislikeOutlined /></div>
                                        </div>
                                    ):<div></div>
                                  }
                                </div>
                              </div>
                         </div>
                      )
              })
          }
        </div>
    </div>
  )
}

export default Participant
