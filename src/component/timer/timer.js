import React from 'react'
import './timer.scss'

const Timer=()=>{
  return(
    <div className="timer-wrapper">
        <div className='clock'></div>
        <div className='time'><h1>59:59</h1></div>
  </div>
  )
}
export default Timer
