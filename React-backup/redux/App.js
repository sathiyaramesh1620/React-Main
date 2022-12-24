import React from 'react'
import Navbar from './Navbar/Navbar'
import{ BrowserRouter as Router,Route,Routes}from 'react-router-dom'
import Message from './Message/Message'
import {Provider} from 'react-redux'
import {store}from './Redux/store'

const App=()=>{
    return(
        <div>
            <Provider store={store}>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/reduxEX" element={<Message/>}/>
                </Routes>
            </Router>
            </Provider>

        </div>
    )
}
export default App