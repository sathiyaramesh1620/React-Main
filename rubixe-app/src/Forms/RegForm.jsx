import React from 'react'
import { useState, useEffect } from "react"
import Axios from "axios"
const RegForm = () => {
  
  let [nameErr, setNameErr] = useState(null)
  let [valid, setValid] = useState(false)
  let [submitted, setSubmitted] = useState(false)
  let [userDetails, setUserDetails] = useState({
    name: "",
})
  let getData = (event) => { 
    setUserDetails({ ...userDetails, [event.target.name]: event.target.value })
  }
  useEffect(() => {
    if (valid === true) {
      validateFun(userDetails)
    }
  }, [userDetails])
  let submitHandler = (e) => {
    e.preventDefault()
    setValid(true)
    let submit = validateFun(userDetails)
    if (submit === true) {
      console.log(submit);
      let url = "http://localhost:8000/user/register"
      Axios.post(url, userDetails)
        .then((response) => {
          setSubmitted(true)
          alert("Register successfully completed...")
        })
        .catch((err) => {
          console.log(err)
        })

    }
  }
  let validateFun = (value) => {
    let name = value.name
    if (name === "") {
      setNameErr("please enter name")
    }
    else if (name.length <= 4 || name.length >= 15) {
      setNameErr("please enter min 4 and max 10 character only")
    }
    else if (name.length >= 4 || name.length <= 15) {
      setNameErr("")
    }
    if (nameErr===""){
      return true
    }

  }

  return <>
    <div className="container">
      <div className="row">
        <pre >{JSON.stringify({userDetails})}</pre>
        <div className="col">
          <h2>Registration Form</h2>
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <input type="text" className="form-control" name="name" onChange={getData} placeholder='Name' />
              <h6 className="text-danger">{nameErr}</h6>
            </div>
            <input type="submit" value="Register" className='btn btn-success' />
          </form>
        </div>
      </div>
    </div>
  </>
}

export default RegForm





