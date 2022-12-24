import React from 'react'

const UserDetails = (props) => {
  return (
    <div className='container' >
      <div className="row">

<h3>{JSON.stringify(props)}</h3>

<div className="col">
  <div className="card">
    <div className="card-header">
    <img src="" alt=""/>
    </div>
    <div className="card-body">
      <ul className='list-group'>
        <li className='list-group-item'>

        </li>
      </ul>
    </div>
  </div>
</div>
</div>
       
    </div>
  )
}

export default UserDetails