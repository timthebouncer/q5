import React from 'react'
import './question.scss'
import {useContextSelector} from "use-context-selector";
import {SocketContext} from "@/store/socketContext";

const Question=()=>{

    const [question]= useContextSelector(SocketContext,e=>[e.question])

    return(
    <div className='question-wrapper'>
        <div className='show-question'>
          <div className='giveup-btn'>
            <button>放棄</button>
          </div>
          <div className='test'>
            <h1>{question.title}</h1>
            <h3>{question.description}</h3>
          </div>
        </div>
        <div className='question-content'>
            {
                question.contents && question.contents.map(item=>{
                    return(
                        <div key={item.id}>
                            <p>{item.name}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Question
