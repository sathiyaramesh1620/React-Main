import React from 'react'
import Axios from 'axios'
class Potato extends React.Component {
    state = {
        vegs: []
    }
    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
            this.setState({ vegs: response.data })
        }).catch()
    }
    render() {
        return <div>
            <pre>{JSON.stringify(this.state.vegs)}</pre>
                        <table>

                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>name</th>
                                    <th>username</th>
                                    <th>email</th>
                                </tr>

                            </thead>
                            <tbody>
                                {
                                        this.state.vegs.length > 0 ? <>
                                            {
                                                this.state.vegs.map((veg) => {

                                                    return <tr>
                                                        <td>{veg.id}</td>
                                                        <td>{veg.name}</td>
                                                        <td>{veg.username}</td>
                                                        <td>{veg.email}</td>
                                                    </tr>
                                                })
                                            }
                                        </> : null
                                    }
                            </tbody>

                        </table>
        </div>
    }
}
export default Potato 