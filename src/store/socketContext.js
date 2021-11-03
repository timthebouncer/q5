import React,{useEffect,useState} from 'react'
import { createContext } from 'use-context-selector'
import {io} from "socket.io-client";

const SocketContext = createContext(null)


const SocketProvider =({children})=>{
    console.log(children,'666')

    const [ws,setWs] = useState(null)
    const[userList,setUserList] = useState([])
    const[question, setQuestion] = useState({})
    const[msgList, setMsgList] = useState([])

    useEffect(() => {
        setWs(
            io('https://l8-upgrade-ws-api1.herokuapp.com/', {
                extraHeaders: {
                    user_info: JSON.stringify({
                        id: localStorage.getItem('userId'),
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

                localStorage.setItem('userId', user.id)
                setUserList(users)
                setQuestion(question)
                setMsgList(messages)
            })

            ws.on('messages', (data) => {
                console.log(data,456)

                // let joinOrLeave = ['JOIN', 'LEAVE']
                // if (joinOrLeave.includes(data.type)) {
                //     setMsgList((prev) => [...prev, data])
                // } else if (data.type === 'OVER_THEN_RESTART') {
                //     setUsers(data.users)
                //     setQuest(data.question)
                //     setMsgList(data.messages)
                // } else if (data.type === 'BLESS_YOU') {
                //     setMsgList((prev) => [
                //         ...prev,
                //         { ...data, type: data.blessType },
                //     ])
                // } else if (data.type === 'MESSAGE') {
                //     setMsgList((prev) => [...prev, data])
                // } else if (data.type === 'GIVE_UP') {
                //     setMsgList((prev) => [...prev, data])
                //     setQuest(data.newQuestion)
                // }
            })
        }
    }, [ws])

    return(
        <SocketContext.Provider value={{userList,question,msgList}}>
            {children}
        </SocketContext.Provider>
    )
}


export {SocketContext}
