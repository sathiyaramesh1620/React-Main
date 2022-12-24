import React from 'react'
import Axios from 'axios'
class Employee extends React.Component {
    state = { users: [] }

    getDataHandler = () => {
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                this.setState({ users: response.data })
            })
            .catch()
    }
    render() {
        return <div>
            <pre>{JSON.stringify(this.state.users)}</pre>
            <button onClick={this.getDataHandler}>Get Data</button>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <table className='table table-hover'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>

                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.users.length > 0 ? <>
                                        {
                                            this.state.users.map((user) => {
                                                return <tr key={user.id}>
                                                    <td>{user.id}</td>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                </tr>

                                            })
                                        }

                                    </> : <>no data</>
                                }
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>

        </div>
    }
}
export default Employee