
import React from "react";
class Registration extends React.Component {
    state={
        Username:"",
        Email:"",
        mobile:"",
        password:""
    }
    
    usernameHandler=(event)=>{
        this.setState({Username:event.target.value})
    }
    emailHandler=(event)=>{
        this.setState({email:event.target.value})
    }
    mobileHandler=(event)=>{
        this.setState({mobile:event.target.value})
    }
    passwordHandler=(event)=>{
        this.setState({password:event.target.value})
    }
    submitHandler=(event)=>{
        event.preventDefault()
         
    }
    render(){
        return<div>
            <h1>Registration Form</h1>
            <pre>{JSON.stringify(this.state)}</pre>
            <form onsubmit={this.submitHandler}>
                <label> Username:</label>
                <input type="text" onChange={this.usernameHandler}  /><br />
                <label>Email:</label>
                <input type="email"onChange={this.emailHandler} /><br />
                <label> phone:</label>
                <input type="number"onChange={this.mobileHandler} /><br />
                <label>password:</label>
                <input type="password"onChange={this.passwordHandler} /><br />
                <input type="submit"  value="login"/>














            </form>





        </div>
    }

}
export default Registration