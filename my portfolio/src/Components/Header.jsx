import React from 'react'
import { Link } from "react-scroll"
import "./Header.css"

const Header = () => {
    return (
        <div className='header'>
            <div className='header_left'>
                <h1> Develop<span>er</span></h1>
                </div>
                <div className='header_right'>
                    <Link to="about" smooth={true} duration={500}>
                        <h4> About me</h4></Link>
                    <Link to="skill" smooth={true} duration={500}>
                        <h4>Skills</h4>
                    </Link>

                    <Link to="projects" smooth={true} duration={500}>
                        <h4>projects</h4>
                    </Link>
                    <Link to="exp" smooth={true} duretion={500}>
                        <h4>Experience</h4>
                    </Link>

                    <Link to="contact" smooth={true} duretion={500}>
                        <h4>Contact</h4>
                    </Link>
                    <h4 className='header_rightbutton'>Join with me</h4>
                </div>

            
        </div>
    )
}

export default Header