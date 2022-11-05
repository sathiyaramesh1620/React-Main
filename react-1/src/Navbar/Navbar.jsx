import React from "react"
import{Link} from "react-router-dom"
class Navbar extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/index" className="navbar-brand"> Counter with redux</Link>
                <div className="ml-auto">
                    <ul className="navbar-nav">
                        <li className="nav-list">
                            <Link to ="/counter" className="nav-link">Counter</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            
        )
    }
}
export default Navbar 