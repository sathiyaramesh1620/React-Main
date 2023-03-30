import React from 'react'
import {Admin,Resource} from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import PortList from './Components/PortList'

const App =()=>{
    return(
        <Admin dataProvider={restProvider("http://localhost:3000")}>
            <Resource  name="posts" list={PortList}/>
        </Admin>
    )
}

export default App;