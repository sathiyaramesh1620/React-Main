
import React from 'react'
import Experiance from '../Experiancebox/Experiance'
import { Element } from 'react-scroll'
import "./Expcontainer.css"
const Expcontainer = () => {
  return (
    <Element className="expe" id="exp">
        <h1>Experiance</h1>
        <div className='expe_info'>
        <Experiance number="+10" title="Clients"/>
        <Experiance number="+10" title="Projects " style={{backgroundColor:"tomato"}}/>
        <Experiance number="+10" title="Clients"/>  
        <Experiance number="+10" title="Clients"/>
        </div>

    </Element>
  )
}

export default Expcontainer