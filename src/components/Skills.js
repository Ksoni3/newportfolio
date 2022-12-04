import React, { useEffect } from 'react'
import './Skills.css'
import { FaRegCheckCircle } from 'react-icons/fa'


const Frontend=[
  
  
  {
    title: "Html",
    level: "Intermediate"

  },
  {
    title: "CSS",
    level: "Intermediate"

  },
  {
    title: "Tailwind",
    level: "Basic"

  },
  {
    title: "JavaScript",
    level: "Intermediate"

  },
  
 
  {
    title: "React",
    level: "Intermediate"

  },
  {
    title: "Git",
    level: "Intermediate"

  }
]


const Backend=[  
    {
      title: "NodeJS",
      level: "Intermediate"
  
    },
    {
      title: "Express",
      level: "Intermediate"
  
    },
    {
      title: "Firebase",
      level: "Basic"
  
    },
    {
      title: "MySQL",
      level: "Intermediate"
  
    },
    
   
    {
      title: "Java",
      level: "Intermediate"
  
    }

] 

const Skills = () => {
 
  return (
    <>
      <div className="skills_container">
        <div className="skills_header">
          <h1> Skills</h1>
          <p>My Technical Level</p>
        </div>
        <div className="skills_body_section">
          <div className="first_col">
            <h2> Frontend Developer </h2>
            <div className='lang'>
            {Frontend.map((data)=>{
              return(
                <div className='lang_section'> <FaRegCheckCircle className='circle' />
               <span className='title_name'> {data.title}</span>
                <p className='level'>{data.level}</p></div>
              )
            })}

            </div>
          </div>
          <div className="second_col">
          <h2> Backend Developer </h2>
          <div className='lang'>
            {Backend.map((data)=>{
              return(
                <div className='lang_section'> <FaRegCheckCircle className='circle' />
               <span className='title_name'> {data.title}</span>
                <p className='level'>{data.level}</p></div>
              )
            })}

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills
