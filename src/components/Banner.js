import React from 'react'
import { FaDownload, FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";


const Banner = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="header_content">
                <div className='header_section'>
                <ul className='header_ul'>
                    <li> <FaFacebook /> </li>
                    <li> <FaGithub /> </li>
                    <li> <FaInstagram /> </li>
                    <li> <FaLinkedin /> </li>
                </ul>
                <h1>I am Kamal Soni</h1>
                <p> I am a well experienced React developer <br /> and software engineer by profession. </p> 
                
                <div className='hbtns'>
                <button> Hire Me</button>
                <button> Resume <FaDownload></FaDownload></button></div>
                </div>
                
                
              </div>
              
              
            </div>
            <div className="col-6">
            <div className='profileimage'> 
            <img src='/images/ronaldo.jpg' alt='#abc' />
            </div>


            </div>
          </div>
        </div>
      </header>
      
      
    </>
  )
}

export default Banner
