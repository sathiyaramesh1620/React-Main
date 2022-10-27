import React from "react"
class Digit extends React.Component{
    constructor(props){
        super(props)
    
        
        this.state ={
            currentTime:new Date().toLocaleTimeString()
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({currentTime:new Date().toLocaleTimeString()})
        },[1000])
        
    }
    render(){
       return <>
       <h1>Time:{this.state.currentTime}</h1>
       </>
    }
}
export default Digit