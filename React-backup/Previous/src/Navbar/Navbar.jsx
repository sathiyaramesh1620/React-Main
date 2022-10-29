import React from "react";
class Navbar extends React.Component {
    render() {
        return <div>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <a className="navbar-brand" href="#"> Exercise</a>
                <div className="ml-auto">
                    <ul className="navbar-nav">
                        <li className="nav-list"> <a className="nav-link" href="#">Home</a></li>
                        <li className="nav-list"> <a className="nav-link" href="#">services</a></li>
                    </ul>
                </div>
            </nav>
        </div>

    }
}
export default Navbar