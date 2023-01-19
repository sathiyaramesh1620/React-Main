import React from 'react'
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Home from './Components/Home'
import Createorder from './Components/Createorder'
import Createorder1 from './Components/Createorder1'
import Createorder2 from './Components/Createorder2'
import Createorder3 from './Components/Createorder3'
import "./App.css"

const App = () => {
  return (
    <div>
     <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Createorder' element={<Createorder/>}/>
        <Route path='/Createorder1' element={<Createorder1/>}/>
        <Route path='/Createorder2' element={<Createorder2/>}/>
        <Route path='/Createorder3' element={<Createorder3/>}/>
      </Routes>
     </Router>
    </div>
  )
}

export default App