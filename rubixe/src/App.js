import React from 'react'
import Navbar from './Navbar/Navbar'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Header from './Components/Header/Header'
import WhoWeAre from './Components/WhoWeAre/WhoWeAre'
import History from './Components/History/History'
import InitiativeCard from './InitiativeCard/InitiativeCard'
import Footer from './Components/Footer/Footer'
import Form from './Components/Form/Form'
const App = () => {
  return (
    <div>
      
      <Router>
      <Navbar/>
      <Header/>

      <WhoWeAre/>
      <History/>
<InitiativeCard/>
      <Form/>
      <Footer/>

      
      <Routes>
        <Route path="/" element={<Home/>}/>

      </Routes>

      </Router>
    </div>
  )
}

export default App