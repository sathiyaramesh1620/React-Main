import React from 'react'
import { useState } from 'react'
import Axios from 'axios'

const CreateProduct = () => {
    let[product,setProduct]=useState({name:""})
    let[submitted,setSubmitted]=useState(false)
    let changeInput=(event)=>{
        setProduct({...product,[event.target.name]:event.target.value})

    }
    let submitHandler=(event)=>{
        console.log("123")
        event.preeventDefault();
        let url="http://127.0.0.1:5000/api/products/"
        Axios.post(url,product).then((response)=>{
            setSubmitted(true)
            console.log("125")
        }).catch()
    }
  return (
    <React.Fragment>
        <div className="container mt-5">
            <pre>{JSON.stringify(product)}</pre>
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h2>Create Product</h2>
                        </div>
                        <div className="card-body"></div>
                    </div>

                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default CreateProduct