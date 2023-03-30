

import React from 'react'
import { Element } from 'react-scroll'
import{IconButton}from "@mui/material"
import{Facebook,Instagram,LinkedIn} from "@mui/icons-material"
import "./Contact.css"
const Contact = () => {
  return (
    <Element className="contacts" id="contact">
        <h1>Contact</h1>

        <div className='contact_container'>
            <p>
              Email:<span>sathiyaramesh1620@gamail.com
                </span> 
            </p>
            <p>Github Username:<span>sathiyaramesh1620</span></p>
            <div className='contact_icons'
            >
            <a href="goole.com">
                <IconButton>
                    <Facebook/>
                </IconButton>
                </a>  
                <a href="goole.com">
                <IconButton>
                    <Instagram/>
                </IconButton>
                </a> 
                <a href="goole.com">
                <IconButton>
                    <Instagram/>
                </IconButton>
                </a> 
                <a href="goole.com">
                <IconButton>
                    <LinkedIn/>
                </IconButton>
                </a>    
                    
                 
            </div>
        </div>

    </Element>
  )
}

export default Contact