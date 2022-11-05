import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrAction, decrAction } from '../redux/product/product.action'
const Product = () => {
    let dispatch = useDispatch()
    let product = useSelector((state)=>{
        return state.product
    })  
        let incrHandler = () => { dispatch(incrAction()) }
    let decrHandler = () => { dispatch(decrAction()) }
    return (
        <div className='container mt-5' >
            <div className="row">
                <pre>{JSON.stringify(product)}</pre>
                <div className="col-md-8">
                    <table className='table table-hover'>
                        <thead className='bg-dark text-white'>
                            <tr>
                                <th>NAME</th>
                                <th>PRICE</th>
                                <th>IMAGE</th>
                                <th> Qty</th>
                                <th> Total</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td><img src={product.image }></img></td>

                                <td><i className='fa fa-minus-circle' onClick ={decrHandler}></i>{product.qty} <i className ='fa fa-plus-circle' onClick={incrHandler}></i></td>
                                
                                <td>{product.qty * product.price}</td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}
export default Product