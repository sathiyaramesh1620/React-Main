import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <Link to="/"className='navbar-brand'>Delloite</Link>
<div className='ml-auto'>
  <ul className='navbar-nav'>
    <li className='nav-list'><Link  to="/login"className='nav-link'>Login</Link></li>
    <li className='nav-list'><Link  to="/registration"className='nav-link'>Registration</Link></li>
  </ul>
</div>
    </nav>
  )
}

export default Navbar