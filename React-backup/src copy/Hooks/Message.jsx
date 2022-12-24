import  React, { useState } from "react"

const Message =()=>{
    let message="Hello"
   let[variable,setvariable] = useState("sathiya");
    return(
        <div>
            {/* <h1>message:{JSON.stringify(variable)}</h1> */}
            <h1>message:{variable}</h1>
<button onClick={()=>{setvariable("dfghjkl")}}>GM</button>
<button onClick={()=>{setvariable("goooooood")}}>GN</button>
        </div>
    )

}
export default Message