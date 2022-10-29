import React from 'react'
import CompB from './CompB'
class CompA extends React.Component{
    eid=101;
    ename="sathiya"
    render(){
        return <div>
            <h2>componentA</h2>
            <hr />
            <CompB one={"gm"} two={"gn"}/>
        </div>
        
    }
} 
export default CompA