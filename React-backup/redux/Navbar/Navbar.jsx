import React from "react"
import{Link} from "react-router-dom"
class Navbar extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/index" className="navbar-brand"> Message with redux</Link>
                <div className="ml-auto">
                    <ul className="navbar-nav">
                        <li className="nav-list">
                            <Link to ="/reduxEX" className="nav-link">Redux</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            
        )
    }
}
export default Navbar 