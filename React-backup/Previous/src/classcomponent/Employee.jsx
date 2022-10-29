import React from 'react'
class Employee extends React.Component {
    emp = {
        eid: 101,
        ename: "rahul Gandhi",
        eage: 50,
        esal: 40000,
        profile_pic: "https://www.behindwoods.com/tamil-actor/simbu/simbu-stills-photos-pictures-395.jpg",
        esalary: 40000,
        status: "single",
        loc: ["thamilnadu", 'Noida']
    }
    render() {
        return <div className='container mt-5'>
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">
                            <img src={this.emp.profile_pic}></img>
                        </div>
                        <div className="card-body ">
                            <ul>
                                <li className=' list-group-item'>Employee id :{this.emp.eid}</li>
                                <li className=' list-group-item'>Employee id :{this.emp.ename}</li>
                                <li className=' list-group-item'>Employee id :{this.emp.eage}</li>
                                <li className=' list-group-item'>Employee id :{this.emp.esalary}</li>
                                <li className=' list-group-item'>Employee id :{this.emp.status}</li>
                                <li className=' list-group-item'>Employee id :{this.emp.loc[0]}</li>


                            </ul>


                        </div>
                    </div>

                </div>
            </div>

        </div>
    }

}


export default Employee