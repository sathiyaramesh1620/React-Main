import React from 'react'
import { useState } from 'react'
import Axios from 'axios'
const CreateProduct = () => {
    let [product, setProduct] = useState({ name: "", image: "", price: "", qty: "", info: "" })
    let [errormessage, setErrormessage] = useState("")
    let [submitted, setSubmitted] = useState(false);
    let changeInput = (event) => {
        setProduct({ ...product, [event.target.name]: event.target.value })
    }
    let changeImageHandler = async (event) => {
        let imageFile = event.target.files[0]
        aaa
        let reader = new FileReader()
        reader.readAsDataURL(imageFile)
        reader.addEventListener("load", () => {
            if (reader.result) {n 
                setProduct({

                    ...product, image: reader.result
                })
            }
            else {
                alert("error")
            }
        })
    }
    let submitHandler = (event) => {
        console.log("test 123")
        event.preventDefault();
        let url = " http://127.0.0.1:5000/api/products/"
        Axios.post(url, product).then((response) => {
            setSubmitted(true)

            console.log("test125")
        }).catch((err) => {
            setErrormessage(err)
        })
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
                            <div className="card-body">
                                <form onSubmit={submitHandler}>

                                    <div className='form-group'>
                                        <input type="text" className='form-control' name="name" onChange={changeInput} placeholder='product Name' />

                                    </div>
                                    <div className='form-group'>
                                        <input type="file" className='form-control' name="imge" id="customFile" onChange={changeImageHandler}
                                            required />

                                    </div>
                                    <div className='form-group'>
                                        <input type="text" className='form-control' name="price" onChange={changeInput} placeholder='price' />

                                    </div>
                                    <div className='form-group'>
                                        <input type="text" className='form-control' name="qty" onChange={changeInput} placeholder='Qty' />

                                    </div>
                                    <div className='form-group'>
                                        <input type="text" className='form-control' name="info" onChange={changeInput} placeholder='info' />

                                    </div>
                                    <input type="submit" value="Create Product" className='btn btn-success'></input>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CreateProduct