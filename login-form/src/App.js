import React from 'react'
import Navbar from './Components/Navbar'
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import LoginId from './Components/LoginId'
import RegistrationForm from './Components/RegistrationForm'
const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route  path='/login' element={<LoginId/>}/>
        <Route  path='/registration' element={<RegistrationForm/>}/>
      </Routes>
     
    </Router>
   
  )
}

export default App