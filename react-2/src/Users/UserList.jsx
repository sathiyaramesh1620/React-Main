import React from 'react'

const UserList = (props) => {
    let selectedUserHandler=(user)=>{
console.log(user)
 props.selectedUser(user)
    }
  return (
    <div className='container'>
        <h1>Userslist</h1>
        <pre>{JSON.stringify(props)}</pre>
        <div className="row">
            <div className="col">
                <table className='table table-hover'>
                    <thead className='bg-dark text-white'>
                        <tr>
                            <th>id</th>
                            <th>FIRSTNAME</th>
                            <th>EMAIL</th>
                            </tr>
                    </thead>
                    <tbody>
                        {
                            props.users.map((user)=>{
                                return(
                                    <tr key={user.id}
                                    onClick={selectedUserHandler.bind(this,user)}>
                                        <td>{user.id}</td>
                                        <td>{user.firstName}</td>
                                        <td>{user.email}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default UserList