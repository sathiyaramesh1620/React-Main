
import compB from "./comB"
let compA =()=>{
    let eid=101;
    let ename="sathiya"
    return  <div>
        <h1>compA component</h1>
        <compB message={"good night"} />
    </div>
}
export default compA