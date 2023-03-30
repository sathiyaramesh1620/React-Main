import React from 'react'
import "./Experiance.css"
const Experiance = ({number,title,style}) => {
  return (
    <div style={{...style}} className="experiance">
        <h1>{number}</h1>
        <p>{title}</p>

    </div>
  )
}

export default Experiance