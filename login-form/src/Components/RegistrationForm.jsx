import React, { useState } from 'react'

const RegistrationForm = () => {
    const[firstName,setFirstName]=useState("");
    const[lastName,setLastName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
   const handleFirstNameChange=(e)=>{
        setFirstName(e.target.value)
    }
   const handlelastNameChange=(e)=>{
        setLastName(e.target.value)
    }
   const handleEmailChange=(e)=>{
        setEmail(e.target.value)
    }
   const handlepasswordChange=(e)=>{
        setPassword(e.target.value)
    }
   const handleSubmitChange=(e)=>{
    e.preventDefault();
        
    }

  return (
    <div className='container mt-5'>
      <div className="row">
        <div className="col-md-6">
        <form>
            <label>First Name:</label>
            <input type='text' value={firstName} onChange={handleFirstNameChange}/>
            <br />
            <lable>Last Name:</lable>
            <input type="text" value={lastName} onChange={handlelastNameChange} />
            
            <br />
            <label>Email:</label>
            <input type="email" value={email} onChange={handleEmailChange} />
            <br />
            <label>Password:</label>
            <input type="password"  value={password} onChange={handlepasswordChange}/>
            <br />
          <button type='submit' onSubmit={handleSubmitChange}>Login</button>
        </form>
        </div>
        </div>
    </div>
  )
}

export default RegistrationForm