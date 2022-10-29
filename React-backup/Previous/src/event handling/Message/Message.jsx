 import React from 'react'
 class Message extends React.Component {
    state = {
        msg:"Hello"
    }
    gmHandler=()=>{
        this.setState({msg:"good morning"})
    }
    gaHandler=()=>{
        this.setState({msg:"good afternoon"})
    }
    geHandler=()=>{
        this.setState({msg:"good evening"})
    }
    gnHandler=()=>{
        this.setState({msg:"good night"})
    }
      render(){
        return<div>
            <h4>Message:{this.state.msg}</h4>
            <button onClick={this.gmHandler}>GM</button>
            <button onClick={this.gaHandler}>GA</button>
            <button onClick={this.geHandler}>GE</button>
            <button onClick={this.gnHandler}>GN</button>
          

        </div>
    }
}export default Message 