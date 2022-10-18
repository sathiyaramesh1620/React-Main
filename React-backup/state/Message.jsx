import React from 'react'
class Message extends React.Component{
    state = {
        message:"hello...."
    }
    gmHandler =()=>{
       console.log("state is updating") 
       this.setState({message:"hello,GM"})

    }
    gnHandler=()=>{
        this.setState({message:"good night -take rest"})
    }
    render(){
        console.log("render method-1")
        return <div>
            <h4>Message:{this.state.message}</h4>
            <button onClick={this.gmHandler}> Gm</button>
            <button onClick={this.gnHandler}>Gn</button>
        </div>
    }
}
export default Message