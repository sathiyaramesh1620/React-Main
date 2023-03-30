import React from 'react'
import{useState} from 'react'
const Content = () => {
    const[name,setname]=useState('sathiya');
    const[count,setCount]=useState(0)
    const handleChange=()=>{
        const names=['sathiya','kevin','Dave'
    ]
    const int=Math.floor(Math.random()*3);
    setname( names[int])
    }
    const handleClick=()=>{
        console.log(count)
    }
    const handleClick2=(name)=>{
        console.log(`${name} was clicked`)
    }
    const handleClick3=(e)=>{
        console.log(e.target.innerText)
    }
  return (
    <main>
        <p onDoubleClick={handleClick}>  hello      {handleChange()}!
        </p>
    <button onClick={handleClick}>Change Name</button>
    <button onClick={handleClick}>click it</button>
    <button onClick={(e)=>handleClick3(e)}>Click it</button>
    </main>
  )
}

export default Content