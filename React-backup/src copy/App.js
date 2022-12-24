
import React from 'react'
import {BrowserRouter as Router,Route,Routes} from'react-router-dom'                                         
//import Employee from './Axios/Employee'
//import Potato from './Axios/Potato'
import Message from './Hooks/Message'
import Counter from './Hooks/Counter'
import Navbar from './Hooks/Navbar'
class App extends React.Component{
  render(){
    return(
      <div>
        
        <Router>
        <Navbar/>
          
          <Routes>
            <Route path="/message" element={<Message/>}/>
            <Route path="/counter" element={<Counter/>}/>
            
          </Routes>
        </Router>
      </div>
    )
      
     

          
  }
}
export default App