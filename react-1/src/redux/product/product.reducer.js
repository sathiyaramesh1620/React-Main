import {INCR,DECR} from './product.action'
let initialState={
    name:"Apple Iphone-12",
    image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRczYdl7Qq5PvE68pfgpvDg5ZCYgvCH3NltrWTIIWIrH8gPGuEfKFjZGOkUc8Ti&usqp=CAc",
    price:500000,
    qty :1
}
let productReducer = (state = initialState,action)=>{
console.log(action.type)
switch(action.type){
    case INCR:
     return {...state,qty:state.qty+1}  
     case DECR:
        return{...state,qty:state.qty-1}
        default:
            return state 

}
}
export {productReducer}