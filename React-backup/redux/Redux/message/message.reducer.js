
import{sathiya,ramesh} from './message.action'

let initialState ={
    message:"Hello"
}


let messageReducer=(state=initialState ,action)=>{
    switch(action.type){
        case sathiya:
            return{message:"goooooood morning"}
        case ramesh:
            return{message:"good night"} 
            default:
                return state

    }

}
export{messageReducer}