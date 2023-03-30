import React from 'react'
import Project from '../Project/Project'
import { Element } from 'react-scroll'
import "./Projectcontainer.css"
const Projectcontainer = () => {
    const projects=[
        {
            imge:"https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?cs=srgb&dl=pexels-pixabay-60597.jpg&fm=jpg",
            title:"facebook",
            des:"sathiya full stack developer",
            link:"www.goole.com"
        },
        {
            imge:"https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?cs=srgb&dl=pexels-pixabay-60597.jpg&fm=jpg",
            title:"facebook",
            des:"sathiya full stack developer",
            link:"www.goole.com"
        },
    ]
  return (
    <Element className="projectcontainer" id="projects">
        <h1>Projects</h1>
        <p>project done</p>
        <div className='projectcontainer_projects'>
{
    projects.map((p,index)=>{
        return(
            <Project 
            key={index}
            img={p.imge}
            title={p.title}
            descr={p.des}/>

        )
    })
}
        </div>

    </Element>
  )
}

export default Projectcontainer