import React,{useState} from 'react'
import './Table1.css'
function Table(){
    const list =[

        {
            id:1,
            name:"HP",
            price:"40000"
        },
        {
            id:2,
            name:"lenovo",
            price:"20000"
        },
    ]
    const[lists,setList]=useState(list)
    return(
       <div className='table'>
        <div>
       <AddList setList={setList}/>
        <table>
            {
                lists.map((e)=>(
                    <tr>
                        <td>{e.name}</td>
                        <td>{e.price}</td>
                        <td>
                            <button className='edit'>Edit</button>
                            <button className='delete'>Delete</button>
                        </td>
                    </tr>
                ))
            }
        </table>
        </div>
       </div>
       )
    
}

function AddList({setList}){
    
    function handleSubmit(event){
        event.preventDefault()
        const name=event.target.elements.name.value;
        const price=event.target.elements.price.value;
        const newlist={
            id:3,
            name,
            price
        }
setList((preList)=>{
    return preList.concat(newlist)
})

    }
    return(
        <form className='addForm' onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Enter name" />
            <input type="text" name="price" placeholder=" Enter price" />
            <button type="submit">Add</button>
        </form>
    )
}
export default Table;