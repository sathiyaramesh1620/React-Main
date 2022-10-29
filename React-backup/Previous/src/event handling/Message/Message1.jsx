class Message1 extends React.Component{
    state={
        msg:good
    }
    
    render(){
        return<div>
            <h2>message:{this.state.msg}</h2>
            <button onClick={this.state.msg}>GM</button>
            <button onClick={this.state.msg}>GA</button>
            <button onClick={this.state.msg}>GE</button>
            <button onClick={this.state.msg}>GN</button>
            </div>
    }
}
export default Message1