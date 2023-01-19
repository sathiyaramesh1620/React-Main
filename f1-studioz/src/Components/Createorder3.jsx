import React from 'react'
import { Link } from 'react-router-dom'
const Createorder3 = () => {
    return (
        <React.Fragment>
            <nav className='navbar navbar-dark navbar-expand-lg' style={{ backgroundColor: "#34495E" }}>
                <Link to='/' className='navbar-brand'>Create a new order</Link>

            </nav>


            <div className="container mt-5" >
                <div className="card" style={{ backgroundColor: "white", padding: "25px" }}>
                    <div className="row" >
                        <div className="col-md-8">
                            <h4>10' 0" X 10'0.0" CAN211 CC WI COMPLETE DOOR INTELLICORE OBSCURE, 5TH
                                GENERATION FINISH WALDER DOOR</h4>
                            <p>Job Name: Front door with glass Change</p>
                            <p>Product #CWD • Garage Door</p>
                            <p>Availability: IN STOCK (Available for Pickup)</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <button className="btn btn-light" style={{ border: "1px solid black" }}>-</button>&nbsp;<input className="form-control" style={{ width: "40px", height: "40px", display: "inline", border: "1px solid black" }} type="text" value="1" />&nbsp;<button className="btn btn-light" style={{ border: "1px solid black" }}>+</button>
                        </div>
                        <div className="col-4" style={{ textAlign: "center" }}>
                            <p className="text-success">Standard Multiplier: .432</p>
                            <p className="text-success">Secondary Multipliers Applied</p>
                            <p style={{ color: "brown" }}>Apply MPQ</p>
                        </div>
                        <div className="col-4" style={{ textAlign: "center" }}>
                            <p>Net Price: <span style={{ fontSize: "20px", fontWeight: "bold" }}>$4500.00</span></p>
                            <p>Unit Price: S4800.00</p>
                            <p style={{ color: "brown" }}>View Price Details</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12" style={{ display: "flex", justifyContent: "space-around" }} >
                            <div className="btn btn-light" style={{ width: "260px", border: "1px solid black" }} value='FAVORITES' >FAVORITES </div>
                            <div className="btn btn-light" style={{ width: "260px", border: "1px solid black" }} value='EDIT'  >EDIT </div>
                            <div className="btn btn-light" style={{ width: "260px", border: "1px solid black" }} value='COPY' >COPY </div>
                            <div className="btn btn-light" style={{ width: "260px", border: "1px solid black" }} value='DELETE' > DELETE</div>
                        </div>
                    </div></div><br />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6" >
                        <div className="card">
                            <div className="card-body" >
                                <label htmlFor=""> Change Delivery Date</label>

                                <input type="text" className='form-control' />
                                <label htmlFor=""> Standard Delivery: Tue May 28-2019</label>

                            </div>
                        </div>
                        <br />
                        <br />
                        <div className="card">
                            <div className="card-body">
                                <label htmlFor="">Purchase Order Number</label>
                                <input type="text" className='form-control' />
                                <label htmlFor=""> This PO will be useful to track this order items</label>

                            </div>
                        </div>

                    </div>
                    <div className="col-md-6">
                        <div className="card" style={{ padding: "1rem" }}>
                            <div style={{ fontSize: "18px" }}><p>Bill Summary</p></div>
                            <div style={{ display: "flex", justifyContent: "space-between" }}><p>sub Total</p><p>$ 4500.00</p></div>
                            <div style={{ display: "flex", justifyContent: "space-between" }}><p>Energy Surcharge</p><p>$70.18</p></div>
                            <div style={{ display: "flex", justifyContent: "space-between" }}><p>Sales Tax</p><p>$ 490.93</p></div>
                            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "20px" }}><p>TOTAL</p><p>$ 5061.11</p></div><hr />

                            <div className="col-md-12">
                                <input type="checkbox" style={{ display: "inline" }} /><span>Apply Tax</span>
                                <p>(The 1 % iStore discount is calculated into the total price for all
                                    doors and door parts. Please refer to the quote or order
                                    acknowledgment for details.)</p>
                            </div>

                        </div>
                    </div>
                </div>
                <br />

                <div className="row" style={{display:"flex",flexFlow:"row wrap", alignItems:"center", justifyContent:"space-around",backgroundColor:"white" }} >
                <div style={{display:"flex",flexFlow:"row wrap", alignItems:"center", justifyContent:"space-between" }}>
                    <div className="col-md-10">
                        <h6>Billing To</h6>
                        <h5>Bement Jared</h5>
                        <h6>144 Curt Shores,50,Madison Avenue</h6>
                        <h6>Hixson-42040</h6>
                        <h6>Contact:(123)4567890</h6>
                    </div>
                    <div className="col-md-2">
                        <button>CHANGE</button>
                    </div>
                    </div>
                    <div style={{display:"flex",flexFlow:"row wrap", alignItems:"center", justifyContent:"space-between"}}>
                    <div className="col-md-10">
                        <h6>Billing To</h6>
                        <h5>Bement Jared</h5>
                        <h6>144 Curt Shores,50,Madison Avenue</h6>
                        <h6>Hixson-42040</h6>
                        <h6>Contact:(123)4567890</h6>
                    </div>
                    <div className="col-md-2">
                        <button>CHANGE</button>
                    </div>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-12" >
                        <div className="card">
                            <div className="card-body" style={{ display: "flex", justifyContent: "flex-end" }}>
                                <button className='btn btn-light' style={{ border: "1px solid brown", color: "brown" }}>ADD MORE</button>&nbsp;
                                <button className='btn' style={{ backgroundColor: "brown", color: "white" }}>PLACE ORDER</button>
                            </div>
                        </div>
                    </div>


                </div>

            </div>






        </React.Fragment>
    )
}

export default Createorder3