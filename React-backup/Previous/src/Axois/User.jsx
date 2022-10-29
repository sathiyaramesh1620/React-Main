import React, { Component } from 'react'
import Axios from 'axios'
class User extends Component {
    state = { user: [] }
    getDataHandler = () => {
        Axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
            console.log(response.data)
            this.setState({ user: response.data })
        })
            .catch()
    }
    render(){
        return(
            <div>
                <pre>{JSON.stringify(this.state.user)}</pre>
                <button onClick={this.getDataHandler}>Get Data</button>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.user.length> 0 ? <>
                                        {this.state.user.map(()=>{
                                            return <tr>
                                                <td>{this.state.user.id}</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        })}
                                        </>
                                        
                                        :null
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default User