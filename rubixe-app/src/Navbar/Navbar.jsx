import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='navbar navbar-light bg-primary navbar-expand-lg'>
        <Link to="/" className="navbar-brand">Rubixe</Link>
        <div className='ml-auto'>
            <ul className='navbar-nav'>
                <li className='nav-list' > <Link className="nav-link" to="/">Home</Link></li>
                <li className='nav-list' > <Link className="nav-link" to="/">Login</Link></li>
                <li className='nav-list' > <Link className="nav-link" to="/">Admin</Link></li>
            </ul>

        </div>

    </nav>
  )
}

export default Navbar