import React from 'react'
import { Link } from 'react-router-dom'
const Createorder1 = () => {
    return (
        <React.Fragment>
            <nav className='navbar navbar-dark navbar-expand-lg' style={{backgroundColor:"#34495E"}}>
                <Link to='/' className='navbar-brand'>Configure a new order 2 of 3</Link>
            </nav>
            <div className='container mt-5'>
                <div className="row">
                    <div className="col-md-6">
                        <label>Select Category </label>
                    </div>
                    <div className="col-md-6">
                        <div class="btn-group">
                            <input class="btn btn-secondary btn-lg" style={{ backgroundColor: "white", color: "black" }} value='Residential Door'>

                            </input>
                            <button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown"style={{ backgroundColor: "white", color: "black" }} aria-haspopup="true" aria-expanded="false">
                                <span class="sr-only">Toggle Dropdown</span>
                            </button>
                            <div class="dropdown-menu">

                            </div>
                        </div>

                    </div>
                </div><br />
                <div className="row">
                    <div className="col-md-6">
                        Select Series
                    </div>
                    <div className="col-md-6">

                        <div class="btn-group">
                            <input class="btn btn-secondary btn-lg"style={{ backgroundColor: "white", color: "black" }} value='Canyon Ridge Collection'>

                            </input>
                            <button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown"style={{ backgroundColor: "white", color: "black" }} aria-haspopup="true" aria-expanded="false">
                                <span class="sr-only">Toggle Dropdown</span>
                            </button>
                            <div class="dropdown-menu">

                            </div>
                        </div>

                    </div>
                </div>
                <br />
                <div className="row">

                    <div className="col-md-6">
                        Door Type
                    </div>
                    <div className="col-md-6">

                        <div class="btn-group">
                            <input class="btn btn-secondary btn-lg"style={{ backgroundColor: "white", color: "black" }} value='CAN212'>

                            </input>
                            <button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown"style={{ backgroundColor: "white", color: "black" }} aria-haspopup="true" aria-expanded="false">
                                <span class="sr-only">Toggle Dropdown</span>
                            </button>
                            <div class="dropdown-menu">

                            </div>
                        </div>

                    </div>
                </div>



            </div>

        </React.Fragment>
    )

}

export default Createorder1