import React from 'react'
import {Element} from "react-scroll"
import image from "../../assets/two.jpg"

import LinearProgress from '@mui/material/LinearProgress';
// or
// import { LinearProgress } from '@mui/material';
import "./Skillcontainer.css"


const Skillcontainer = () => {
  return (
<Element className='skillcontainer' id="skills">
    <div className='skillcontainer_image'>
       <img src={image} alt="" height={300}/>
       </div>
       <div className='skillcontainer_text'>
        <h2>SKILLSSET</h2>
        
        <div className='skillcontainer_skillset'>
          <h5>React</h5>
          <div className='skillcontainer_slider skillcontainer_slider1'>
            <LinearProgress variant="determinate" value={90}/>
          </div>
        </div>
        <div className='skillcontainer_skillset'>
          <h5>javascript</h5>
          <div className='skillcontainer_slider skillcontainer_slider2'>
            <LinearProgress variant="determinate" value={90}/>
          </div>
        </div>
        <div className='skillcontainer_skillset'>
          <h5>Html</h5>
          <div className='skillcontainer_slider skillcontainer_slider3'>
            <LinearProgress variant="determinate" value={70}/>
          </div>
        </div>
        <div className='skillcontainer_skillset'>
          <h5>CSS</h5>
          <div className='skillcontainer_slider skillcontainer_slider4'>
            <LinearProgress variant="determinate" value={90}/>
          </div>
        </div>
        <div className='skillcontainer_skillset'>
          <h5>Java</h5>
          <div className='skillcontainer_slider skillcontainer_slider5'>
            <LinearProgress variant="determinate" value={90}/>
          </div>
        </div>
       </div>
    
</Element>
  )
}

export default Skillcontainer;