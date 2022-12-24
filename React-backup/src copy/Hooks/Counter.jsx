import React from 'react'
import { useState } from 'react'
const Counter = () => {
    let [Product, setProduct] = useState({
        Product_name: "Apple-15",
        Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAWrohWJCg7IBWTHMiZYsZHuEOWDwsdPnpUw&usqp=CAU",
        Price: 500000,
        Qty: 1


    });
    let incrHandler = () => {
        setProduct({...Product, Qty: Product.Qty + 1 })
    }
    let decrHandler = () => {
        setProduct({...Product,Qty: Product.Qty - 1 })
    }


    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <table className='table table-hover'>
                        <thead className='bg-dark text-white'>
                            <tr>
                                <th>Product_name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Quty</th>
                                <th>total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> {Product.Product_name}</td>

                                <td><img src={Product.Image} height="50px" alt="no" /></td>
                                
                                <td>{Product.Price}</td>
                               <td><i className = "fa fa-minus-circle " onClick = {decrHandler}></i>{Product.Qty}
                               <i className =" fa fa-plus-circle" onClick = {incrHandler}></i></td>
                                <td>{Product.Qty * Product.Price}</td>


                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Counter