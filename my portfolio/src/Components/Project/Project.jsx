import React, { useState } from 'react'
import "./Project.css"
const Project = ({img,title,des,link}) => {
    const [show, setShow] = useState(false)
    return (
        <a href={link}>
            <div className='project' onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
                {
                    show ? (
                        <div  className='project_content'>
                            <h2>{title}</h2>
                            <p>{des}</p>

                        </div>
                    ) :
                        (
                            <img src={img} alt="" />
                        )
                }
            </div>
        </a>
    )
}

export default Project