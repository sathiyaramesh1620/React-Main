import Postlist from "./Components/Postlist";
import React from 'react'
import {Admin,Resource} from 'react-admin'
import RestProvider from 'ra-data-simple-rest'
const App=
()=> {
  return (
    <Admin dataProvider={RestProvider("http://localhost:3000")}>
            <Resource  name="posts" list={Postlist}/>
        </Admin>
  )

}

export default App;
