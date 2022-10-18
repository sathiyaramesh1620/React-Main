import React from 'react'
import Login from './component/Login'
import Footer from './component/Footer'
import compA from "./probs/funtofuncomponent/comA"
import compB from "./probs/funtofuncomponent/comB"
// import Navbar from './Navbar/Navbar'
import Navbar from './Navbar/navbarclass'

import Employee from "./classcomponent/Employee"

let App = () => {
    return <div>
        <h1> hello react</h1>
        <compA/>
        <compB/>  
        <Employee/>

        <Footer />
        <Navbar/>
    </div>


}
export default App
