import React from 'react'
import{Element}from "react-scroll"
import image from "../../assets/two.jpg"
const Skillcontainer = () => {
  return (
<Element className='skillcontainer' id="skills">
    <div className='skillcontainer_image'>
       < img src={image} alt="" height={300}/>
       <div className='skillcontainer_text'>
        <h2>SKILLSSET</h2>
       </div>
    </div>
</Element>
  )
}

export default Skillcontainer