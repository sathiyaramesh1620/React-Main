import React from 'react'
import { Link } from 'react-router-dom'
import ProductList from '../Product/ProductList'

const Navbar = () => {
  return (
    <React.Fragment>
        <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
            <Link to="/register" className="navbar-brand"> Product CRUD Example</Link>
            <div className='ml-auto'>
                <ul className='navbar-nav'>
                    <li className='nav-list'>
                        <Link className='nav-link' to="/products">Products List
                        
                        
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </React.Fragment>
  )
}

export default Navbar