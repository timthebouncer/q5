import React from 'react'
import './question.scss'

const Question=()=>{
  return(
    <div className='question-wrapper'>
        <div className='show-question'>
          <div className='giveup-btn'>
            <button>放棄</button>
          </div>
          <div className='test'>
            <h1>信箱</h1>
            <h3>就是信箱的正則</h3>
          </div>
        </div>
        <div className='question-content'>

        </div>
    </div>
  )
}

export default Question
