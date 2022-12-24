
import React from 'react'
import { Link } from 'react-router-dom'
let Navbar = () => {
    return <React.Fragment>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/" className='navbar-brand'>
                User Component
            </Link>
            <div className='ml-auto'>
                <ul className='navbar-nav'>
                    <li className='nav-item'>


                        <Link to="/message" className='nav-link'>Message</Link></li>
                    <li className='nav-item'>
                        <Link to="/counter" className='nav-link' >Counter</Link>
                    </li>

                </ul>

            </div>

        </nav >
    </React.Fragment>
}
export default Navbar