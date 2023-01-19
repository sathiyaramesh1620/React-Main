import React from 'react'
import { Link } from "react-router-dom"
import logo1 from '../asset/logo.png'

const Navbar = () => {

    return (
        <React.Fragment>
            <nav className='navbar navbar-dark bg-dark  navbar-expand-lg'>
                <Link to='/'className='navbar-brand '><img width="50px" src={logo1}/>Studioz</Link>
                <div className='ml-auto'>
                    <ul className='navbar-nav' style={{marginInline:"1rem"}}>
                    <li className='nav-ist'style={{marginInline:"1rem"}} ><Link className='nav-ink' to='/Home'>Home</Link></li>
                    <li className='nav-ist'style={{marginInline:"1rem"}} ><Link className='nav-ink' to='/Createorder'>Createorder</Link></li>
                    <li className='nav-ist'style={{marginInline:"1rem"}} ><Link className='nav-ink' to='/Createorder1'>Createorder1</Link></li>
                    <li className='nav-ist'style={{marginInline:"1rem"}} ><Link className='nav-ink' to='/Createorder2'>Createorder2</Link></li>
                    <li className='nav-ist' style={{marginInline:"1rem"}}><Link className='nav-ink' to='/Createorder3'>Createorder3</Link></li>
                    </ul>


                </div>

            </nav>
        </React.Fragment>
    )
}

export default Navbar