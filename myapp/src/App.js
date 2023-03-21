import React from 'react'
import Navbar from './Navbar/Navbar'
import Createproduct from './Products/Createproduct'
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
<Router>
  <Navbar/>
  <Routes>
    <Route path="/products" element={<Createproduct/>}/>
  </Routes>
</Router>

    </div>
  )
}

export default App