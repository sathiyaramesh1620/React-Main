import React from 'react'
import Navbar from './navbars/navbar'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const App = () => {
    return (
        <div>

            <Router>
                <Navbar />
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Router>
        </div>
    )
}
export default App