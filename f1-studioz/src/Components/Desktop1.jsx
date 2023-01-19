import React from 'react'
import {Link} from 'react-router-dom'
const Desktop1 = () => {
  return (
    <React.Fragment>
        <nav className='navbar navbar-dark navbar-expand-lg' style={{backgroundColor:"#34495E"}}>
                <Link to='/' className='navbar-brand'>Create a new order</Link>
            </nav>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>PRODUCT INFORMATION</th>
                                    <th>CART NAME</th>
                                    <th>SHIPPING POINT</th>
                                    <th>CREATED BY</th>
                                    <th>EXPIRY</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
                                    <td>2 Classic Collection Garage Door, 2 Entry Door</td>
                                    <td>Johnson_CIassicI 4209123</td>
                                    <td>Russia Plant</td>
                                    <td>Manoj Bajpayee</td>
                                    <td style={{color:"orange"}}>Expires in 6 days</td>
                                </tr>
                                <tr>
                                    <td>10' 0" X 10'0.0" CAN211CCW1 COMPLETE DOOR INTELLICORE</td>
                                    <td>Carter_Classic14209123</td>
                                    <td>Russia Plant</td>
                                    <td>Steve Benneth...    </td>
                                    <td style={{color:"orange"}}>Expires in 6 days</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
    </React.Fragment>

    
  )
}

export default Desktop1