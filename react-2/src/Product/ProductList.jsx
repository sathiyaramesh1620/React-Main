import React,{Fragment, useEffect} from 'react'
import { useState } from 'react'
import Axios from 'axios'
const ProductList = () => {
let[Products,setProducts]=React.useState([])
let[errMessage,setErrMessage]=React.useState("")
useEffect(()=>{
    let url =`http://127.0.0.1:500/api/products`
    Axios.get(url).then((response)=>{
        setProducts(response.data)

    }).catch()
},[])
  return<Fragment>
    <div className="container">
        <div className="row">
            {
                Products.length> 0 ?<>
                {
                    Products.map((Product)=>{
                        return <div className='col-md-3'>
                            <div className="card">
                                <div className="card-header">

                                </div>
                                <div className="header-body">
                                   <ul className='list-group'>
                                    <li className='list-group-item' >{Product.name}</li>

                                   </ul>
                                </div>
                            </div>

                        </div>
                    })
                }
                </>:<h5>no products</h5>
            }

            </div>
        </div>
    
  </Fragment>
}

export default ProductList