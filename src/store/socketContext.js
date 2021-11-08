import React,{useEffect,useState} from 'react'
import { createContext } from 'use-context-selector'
import {io} from "socket.io-client";

const SocketContext = createContext(null)


const SocketProvider =({children})=>{

    const [ws,setWs] = useState(null)
    const[userList,setUserList] = useState([])
    const[question, setQuestion] = useState({})
    const[msgList, setMsgList] = useState([])

    useEffect(() => {
        setWs(
            io('https://l8-upgrade-ws-api1.herokuapp.com/', {
                extraHeaders: {
                    user_info: JSON.stringify({
                        id: localStorage.getItem('myId'),
                        name: '5278',
                    }),
                },
            })
        )
        return () => {
            ws?.close()
        }
    }, [])


    useEffect(() => {
        if (ws) {
            ws.on('connect', () => {
                console.log('連接', ws)
            })
            ws.on('disconnect', () => {
                ws.close()
            })
            ws.on('connection', (data) => {
                let { users, question, messages, user } = data

                localStorage.setItem('myId', user.id)
                setUserList(users)
                setQuestion(question)
                setMsgList(messages)
            })

            ws.on('messages', (data) => {
                console.log(data,123123)

                let inOrOut = ['JOIN', 'LEAVE']
                if (inOrOut.includes(data.type)) {
                    setMsgList((prev) => [...prev, data])
                } else if (data.type === 'OVER_THEN_RESTART') {
                    setUserList(data.users)
                    setQuestion(data.question)
                    setMsgList(data.messages)
                } else if (data.type === 'BLESS_YOU') {
                    setMsgList((prev) => [
                        ...prev,
                        { ...data, type: data.blessType },
                    ])
                } else if (data.type === 'MESSAGE') {
                    setMsgList((prev) => [...prev, data])
                } else if (data.type === 'GIVE_UP') {
                    setMsgList((prev) => [...prev, data])
                    setQuestion(data.newQuestion)
                } else if(data.type === "ANSWER") {
                    setMsgList((prev) => [...prev, data])
                    setUserList((prev) => [...prev, {score:data.score}])
                }
            })
        }
    }, [ws])

    const sendMsg = (data) => {
        if (!data)return
        ws.emit('message', data)
    }

    const sentAnswer = (data) => {
        if (!data)return
        ws.emit('answer',data)
    }

    const giveALike=()=>{
        ws.emit('bless')
    }

    const giveUpOnYou=()=>{
        ws.emit('giveUp')
    }

    const restart = () => {
        ws?.emit('restart')
    }


    return(
        <SocketContext.Provider value={{userList,question,msgList,sendMsg,sentAnswer}}>
            {children}
        </SocketContext.Provider>
    )
}

export default SocketProvider
export {SocketContext}
