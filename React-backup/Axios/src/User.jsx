import React from 'react'
import Axios from 'axios'
class User extends React.Component {
    state = { persons: [] }

    getDataHandler = () => {
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                this.setState({ persons: response.data })
            }).catch(() => { })
    }

    render() {
        return (
            <div>
                <pre>{JSON.stringify(this.state.persons)}</pre>
                <button onClick={this.getDataHandler}>Get Data</button>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <table className='table table-hover'>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Salary</th>
                                    </tr>

                                </thead>
                                <tbody>
                                    {
                                        this.state.persons.length > 0 ? <>
                                            {
                                                this.state.persons.map((user) => {
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
        )
    }
}
export default User