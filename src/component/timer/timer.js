import React,{useState,useEffect, useRef} from 'react'
import './timer.scss'





const Timer=()=>{

  const Ref = useRef(null);
  const [timer, setTimer] = useState('00:00:00');


  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    return {
      total, minutes, seconds
    };
  }

  const startTimer = (e) => {
    let { total, minutes, seconds }
      = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (minutes > 9 ? minutes : '0' + minutes) + ':'
        + (seconds > 9 ? seconds : '0' + seconds)
      )
    }
  }

  const clearTimer = (e) => {

    setTimer('60:00');

    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000)
    Ref.current = id;
  }

  const getDeadTime = () => {
    let deadline = new Date();

    deadline.setSeconds(deadline.getSeconds() + 7200);
    return deadline;
  }

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);


  const onClickReset = () => {
    clearTimer(getDeadTime());
  }



  return(
    <div className="timer-wrapper">
        <div className='clock'></div>
        <div className='time'><h1>{timer}</h1></div>
  </div>
  )
}
export default Timer

