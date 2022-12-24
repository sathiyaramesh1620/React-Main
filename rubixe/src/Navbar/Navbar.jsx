import React from 'react'
import logo from '../asset/logo.png'
import {Link} from "react-router-dom"
const Navbar = () => {

  return (
    <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
<Link to='/' className='navbar-brand'><img src={logo} alt="" height="40px" /></Link>
<div className='ml-auto'>
    <ul className='navbar-nav'>
        <li className='nav-list' ><Link className='nav-link'>HOME</Link></li>
        <li className='nav-list'><Link className='nav-link'>SERVICES</Link></li>
        <li className='nav-list'><Link className='nav-link'>PRODUCTS</Link></li>
        <li className='nav-list'><Link className='nav-link'>AIINTERNSHIP</Link></li>
        <li className='nav-list'><Link className='nav-link'>CAREER</Link></li>
        <li className='nav-list'><Link className='nav-link'>BLOG</Link></li>
        <li className='nav-list'><Link className='nav-link'>ABOUT</Link></li>
        <li className='nav-list'><Link className='nav-link'>CONTACTAS</Link></li>
        </ul>

</div>


    </nav>
  )
}

export default Navbar