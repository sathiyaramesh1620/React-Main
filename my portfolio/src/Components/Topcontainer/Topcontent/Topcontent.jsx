import React from 'react'
import {Link} from "react-scroll"
import "./Topcontent.css"
const Topcontent = () => {
    return (
        <div className='topcontent'>
            <div className='topcontent_container'>
                <h2>Sathiya</h2>
                <p>Java fullstack developer</p>
                <a href="www.google.com">
                    <button className='topcontent_downloadbutton'>Download cv</button>
                </a>
                <Link to="projects" smooth={true} duration={500}></Link>
                <button className='topcontent_workbutton'>My work</button>

            </div>

        </div>
    )
}

export default Topcontent