import React from 'react'
import employees from './data'
class Employee extends React.Component{
    render(){
        return<div class="container mt-5">
            <pre>{JSON.stringify(employees)}</pre>
            <div className="row">
                <div className="col-md-6">
                    <table className="table table-hover">
                        <thead className="bg-dark-text-white">
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Gender</th>
                            </tr>

                        </thead>
                        <tbody>
                            {
                             employees.map((employee)=>{
                                return<tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.name}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.gender}</td>
                                </tr>
                             })   

                            }
                        </tbody>
                        

                    </table>
                </div>
            </div>

        </div>
    }
}
export default Employee