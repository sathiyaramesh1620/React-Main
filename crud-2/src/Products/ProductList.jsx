import React, { Fragment, useEffect, useState } from 'react'
import Axios from 'axios'
const ProductList = () => {
    let [products, setProducts] = useState([])
    let [errormessage, setErrormessage] = useState("")
    useEffect(() => {
        let url = " http://127.0.0.1:5000/api/products"
        Axios.get(url).then((response) => {
            setProducts(response.data)
        }).catch()
    }, [])
    return <Fragment>

        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <h1>ProductList</h1>

                </div>
            </div>
            <div className="row">
                {
                    products.length > 0 ? <>
                        {
                            products.map((product) => {
                                return <div className='col-md-3'>
                                    <div className="card">
                                        <div className="card-header">

                                        </div>
                                        <div className="card-body">
                                            <ul className='list-group'>
                                                <li className='list-group-item'>{product.name}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </> : <div><h5>No Products</h5></div>
                }
            </div>
        </div>

    </Fragment>
}

export default ProductList