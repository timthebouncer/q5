import React from 'react'
import './participant.scss'
import Timer from "@/component/timer/timer";

const Participant=()=>{
  return(
    <div>
      <div><Timer/></div>
      <div className="participant-wrapper">
        <div className="rank">1</div>
        <div className="gender">男</div>
        <i className="status"></i>
        <div className="name">Tim</div>
        <div className="score">5分</div>
      </div>
    </div>
  )
}

export default Participant
