import React from 'react'
import { Link } from 'react-router-dom'
const Createorder = () => {
    return (

        <React.Fragment>
            <nav className='navbar navbar-dark navbar-expand-lg' style={{backgroundColor:"#34495E"}}>
                <Link to='/' className='navbar-brand'>Create a new order</Link>
            </nav>
            <div className='container mt-5'>
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <h3>Configure your door from scratch</h3>
                            <h5>Residential,Commerial,Entry doors</h5>
                        </div>
                    </div>

                </div><br />
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <h3>Parts/Openers</h3>
                            <h5>Order Parts and Openers</h5>
                        </div>
                    </div>

                </div><br />
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <h3>Direct Item Entry</h3>
                            <h5>Order Parts/Openers using a Product ID</h5>
                        </div>
                    </div>

                </div>
                <br />
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <h3>Choose from favourites</h3>
                            <h5>Re-order door from yuor favourites</h5>
                        </div>
                    </div>

                </div>


            </div>

        </React.Fragment>
    )
}

export default Createorder