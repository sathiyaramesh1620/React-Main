import React from 'react'
import { Link } from 'react-router-dom'
const Createorder2 = () => {
  return (
    <React.Fragment>
      <nav className='navbar navbar-dark navbar-expand-lg' style={{backgroundColor:"#34495E"}}>
        <Link to='/' className='navbar-brand'>Configure a new door 2 of 3</Link>
      </nav>
      <div className="container mt-5">
        <div className="card">
          <div className="card-header">Layout options</div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-4">Assembly type</div>

              
                <div className="col-md-8">
                  <div class="btn-group">
                    <input class="btn btn-secondary btn-lg" style={{ backgroundColor: "white", color: "black" }} value='Complete Door' />


                    <button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" style={{ backgroundColor: "white", color: "black" }} aria-haspopup="true" aria-expanded="false">
                      <span class="sr-only">Toggle Dropdown</span>
                    </button>
                    <div class="dropdown-menu">

                    </div>
                  </div>
                </div>
              
            </div>
            <br />
            <div className="row">
              <div className="col-md-4">Measure sizes</div>
              <div className="col-md-4">
              <div class="dropdown">
      <button className="btn btn-light dropdown-toggle" style={{ border: "1px solid black" }} type="button" id="dropdownMenuButton"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
       Dropdown button
     </button>
     <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="#">Action</a>
    <a className="dropdown-item" href="#">Another action</a>
    <a className="dropdown-item" href="#">Something else here</a>
    </div>
    </div>
              </div>
              <div className="col-md-4">
              <div className="dropdown">
      <button className="btn btn-light dropdown-toggle" style={{ border: "1px solid black" }} type="button" data-toggle="dropdown"  aria-expanded="false">
       Dropdown button
      </button>
  <div className="dropdown-menu">
    <a className="dropdown-item" href="#">Action</a>
    <a className="dropdown-item" href="#">Another action</a>
    <a className="dropdown-item" href="#">Something else here</a>
  </div>
</div>
              </div>
              

              
              
            </div>
            <br />
            <div className="row">
              <div className="col-md-4">Windcode</div>
              <div className="col-md-8">
                <div className="btn-group">
                  <input className="btn btn-secondary btn-lg" style={{ backgroundColor: "white", color: "black" }} value='WindCode W1' />


                  <button type="button" className="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" style={{ backgroundColor: "white", color: "black" }} aria-haspopup="true" aria-expanded="false">
                    <span className="sr-only">Toggle Dropdown</span>
                  </button>
                  <div className="dropdown-menu">

                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-4">Design</div>
              <div className="col-md-8">
                <div class="btn-group">
                  <input class="btn btn-secondary btn-lg" style={{ backgroundColor: "white", color: "black" }} value='CC'>

                  </input>
                  <button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" style={{ backgroundColor: "white", color: "black" }} aria-haspopup="true" aria-expanded="false">
                    <span class="sr-only">Toggle Dropdown</span>
                  </button>
                  <div class="dropdown-menu">

                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-4">Color</div>
              <div className="col-md-8">
                <div class="btn-group">
                  <input class="btn btn-secondary btn-lg" style={{ backgroundColor: "white", color: "black" }} value='Dark Finish'>

                  </input>
                  <button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" style={{ backgroundColor: "white", color: "black" }} aria-haspopup="true" aria-expanded="false">
                    <span class="sr-only">Toggle Dropdown</span>
                  </button>
                  <div class="dropdown-menu">

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div><br />
        <div className="card">
          <div className="card-header">Window options</div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-4">Glass Type</div>
              <div className="col-md-8">
                <div class="btn-group">
                  <input class="btn btn-secondary btn-lg" style={{ backgroundColor: "white", color: "black" }} value='Solid(Windows)'>

                  </input>
                  <button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" style={{ backgroundColor: "white", color: "black" }} aria-haspopup="true" aria-expanded="false">
                    <span class="sr-only">Toggle Dropdown</span>
                  </button>
                  <div class="dropdown-menu">

                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-4">Section(S) Glazed</div>
              <div className="col-md-8">
                <div class="btn-group">
                  <input class="btn btn-secondary btn-lg" style={{ backgroundColor: "white", color: "black" }} value='Section 4'>

                  </input>
                  <button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" style={{ backgroundColor: "white", color: "black" }} aria-haspopup="true" aria-expanded="false">
                    <span class="sr-only">Toggle Dropdown</span>
                  </button>
                  <div class="dropdown-menu">

                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-4">Farming</div>
              <div className="col-md-8">
                <div class="btn-group">
                  <input class="btn btn-secondary btn-lg" style={{ backgroundColor: "white", color: "black" }} value='Arch 1 Design'>

                  </input>
                  <button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" style={{ backgroundColor: "white", color: "black" }} aria-haspopup="true" aria-expanded="false">
                    <span class="sr-only">Toggle Dropdown</span>
                  </button>
                  <div class="dropdown-menu">

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="card">
          <div className="card-header">Track options</div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-4">Spring</div>
              <div className="col-md-8">
                <div class="btn-group">
                  <input class="btn btn-secondary btn-lg" style={{ backgroundColor: "white", color: "black" }} value='Galvanized Torsion'>

                  </input>
                  <button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" style={{ backgroundColor: "white", color: "black" }} aria-haspopup="true" aria-expanded="false">
                    <span class="sr-only">Toggle Dropdown</span>
                  </button>
                  <div class="dropdown-menu">

                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-4">Track Size</div>
              <div className="col-md-8">
                <div class="btn-group">
                  <input class="btn btn-secondary btn-lg" style={{ backgroundColor: "white", color: "black" }} value='2" Flag & Jamb Brackets Loose'>

                  </input>
                  <button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" style={{ backgroundColor: "white", color: "black" }} aria-haspopup="true" aria-expanded="false">
                    <span class="sr-only">Toggle Dropdown</span>
                  </button>
                  <div class="dropdown-menu">

                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-4">Track Mount</div>
              <div className="col-md-8">
                <div class="btn-group">
                  <input class="btn btn-secondary btn-lg" style={{ backgroundColor: "white", color: "black" }} value='Bracket'>

                  </input>
                  <button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" style={{ backgroundColor: "white", color: "black" }} aria-haspopup="true" aria-expanded="false">
                    <span class="sr-only">Toggle Dropdown</span>
                  </button>
                  <div class="dropdown-menu">

                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-4">Track Lift</div>
              <div className="col-md-8">
                <div class="btn-group">
                  <input class="btn btn-secondary btn-lg" style={{ backgroundColor: "white", color: "black" }} value='Standard'>

                  </input>
                  <button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" style={{ backgroundColor: "white", color: "black" }} aria-haspopup="true" aria-expanded="false">
                    <span class="sr-only">Toggle Dropdown</span>
                  </button>
                  <div class="dropdown-menu">

                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-4">Track Radius</div>
              <div className="col-md-8">
                <div class="btn-group">
                  <input class="btn btn-secondary btn-lg" style={{ backgroundColor: "white", color: "black" }} value='12" Radius'>

                  </input>
                  <button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" style={{ backgroundColor: "white", color: "black" }} aria-haspopup="true" aria-expanded="false">
                    <span class="sr-only">Toggle Dropdown</span>
                  </button>
                  <div class="dropdown-menu">

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="card">
          <div className="card-header">Other options</div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-4">Lock</div>
              <div className="col-md-8">
                <div class="btn-group">
                  <input class="btn btn-secondary btn-lg" style={{ backgroundColor: "white", color: "black" }} value='Inside Slide Lock(#2)'>

                  </input>
                  <button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" style={{ backgroundColor: "white", color: "black" }} aria-haspopup="true" aria-expanded="false">
                    <span class="sr-only">Toggle Dropdown</span>
                  </button>
                  <div class="dropdown-menu">

                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-4">MISC Lock Options</div>
              <div className="col-md-8">
                <input type="radio" />
                <label>No Lock Hole</label>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-4">Packaging</div>
              <div className="col-md-8">
                <div class="btn-group">
                  <input class="btn btn-secondary btn-lg" style={{ backgroundColor: "white", color: "black" }} value=' [X] Distributer'>

                  </input>
                  <button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" style={{ backgroundColor: "white", color: "black" }} aria-haspopup="true" aria-expanded="false">
                    <span class="sr-only">Toggle Dropdown</span>
                  </button>
                  <div class="dropdown-menu">

                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-4">
                Additional Options
              </div>
              <div className="col-md-6">
                <input type="checkbox" />
                <label> &nbsp;Extra Struts(s)</label>
                <br />

              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-6">
                <input type="checkbox" />
                <label> &nbsp;Spade Strap Hinge(s)</label>

              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-6">
                <input type="checkbox" />
                <label> &nbsp;14 GA Quiet Hinge</label>

              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-6">
                <input type="checkbox" />
                <label> &nbsp;Less Bottom Astragal</label>

              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-6">
                <input type="checkbox" />
                <label> &nbsp;Gold Bar Gurantee(Select Dealers)

                </label>

              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-6">
                <input type="checkbox" />
                <label> &nbsp;Medallion Hardware Upgrade

                </label>

              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-6">
                <input type="checkbox" />
                <label> &nbsp;List Seal Kit

                </label>

              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-6">
                <input type="checkbox" />
                <label> &nbsp;Slide Lock Mounted at 54"

                </label>

              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-6">
                <input type="checkbox" />
                <label>   &nbsp;2 Spear Lift Handles

                </label>

              </div>
            </div>
          </div>
        </div>
        <br />

        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-12" style={{ display: "flex", justifyContent: "flex-end" }}>
                <button className='btn btn-light' style={{ border: "1px solid brown", color: "brown" }}>PREVIEW</button>&nbsp;
                <button className='btn' style={{ backgroundColor: "brown", color: "white" }}>ADD TO CART</button>
              </div>


            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Createorder2