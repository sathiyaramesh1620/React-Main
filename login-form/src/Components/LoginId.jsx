import React, { useState } from 'react'

const LoginId = () => {
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const[loggedIn,setLoggedIn]=useState(false);

    const handleSubmit =(event)=>{
        event.preventDefault();
        if(username === 'user'&& password === 'password'){
            setLoggedIn(true)
        }
    }
  return (
    <div>
        {
            loggedIn?(
                <p>You are logged in! </p>

            ):
            (
                <form>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} />
                    <br />
                    <label>password:</label>
                    <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <br />
                    <button type='submit' onSubmit={handleSubmit}>login</button>
                </form>
            )
        }

    </div>
  )
}

export default LoginId