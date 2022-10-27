import React from 'react'
class Login extends React.Component {
    state = {
        email: "",
        password: ""
    }
    emailHandler = (event) => {
        console.log(event.target.value)
        this.setState({ email: event.target.value })
    }
    passwordHandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    buttonHandler = (event) => {
        event.preventDefault()
        console.log(this.state)
    }


    render() {
        return <div>

            <h1>Form Handling</h1>
            <pre>{JSON.stringify()}</pre>
            <form onClick={this.buttonHandler}>
                <label >
                    Email:
                </label>
                <input type="text" onChange={this.emailHandler} /><br />
                <label>Password:</label>
                <input type="text" onChange={this.passwordHandler} /><br />
                <button>login</button>

            </form>

        </div>
    }

}
export default Login