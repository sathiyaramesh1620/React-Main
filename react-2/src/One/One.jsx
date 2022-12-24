import React from 'react'
import { useEffect } from 'react'

const One = () => {
    useEffect(
        ()=>{
            console.log ("use effect invoked")
        }
    )
  return (
    <div>One</div>
  )
}

export default One