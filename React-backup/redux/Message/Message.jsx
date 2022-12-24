import React from 'react'
import {sathiyaAction,rameshAction} from '../Redux/message/message.action'
import {useDispatch ,useSelector} from 'react-redux'

const Message = ()=>{
    let dispatch = useDispatch()
    let message=useSelector((state)=>{
        return state.message
    })
    let sathiyaHandler=()=>{
        dispatch(sathiyaAction())
    }
    let rameshHandler=()=>{
        dispatch(rameshAction)
    }

    return(
        <div>
            <pre>{JSON.stringify(message)}</pre>
            <h1>Message:{message.message}</h1>
<button onClick={sathiyaHandler}>sathiya</button>
<button onClick={rameshHandler}>ramesh</button>
        </div>
    )
}
export default Message 