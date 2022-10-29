import React from 'react'
class CompB extends React.Component{
    render(){
        return <div>
            <hr />
            <h2>componentB</h2>
            <pre >{JSON.stringify(this.props)}</pre>
            
        </div>
    }
}
export default CompB