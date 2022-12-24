import {INCR,DECR} from "./product.action"
 let initialstate={
    name:"Apple i phone",
    image:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTfdtvIG6hfglzoXKONFqvpeqJqAcVSe5Ylbs2ZKE-bYyy9lcPVl7BxL_8Lffbcf73YZWR7g9zS1g&usqp=CAc",
     price:500000,
     qty:1
 }

let productReducer=(state=initialstate,action)=>{
    console.log(action.type)
    switch(action.type){
        case INCR:
            return{...state,qty:state.qty+1}
            case DECR:
                return{...state,qty:state.qty-1}
                default:
                    return state
    }

}
export {productReducer}
