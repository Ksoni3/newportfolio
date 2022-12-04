import React from 'react'
import { FaGraduationCap, FaMailBulk } from 'react-icons/fa';
import './About.css';


const About = () => {
  return (
    <div className='
    about'>
    
        <div className='container_about'>
            <div className='about_content'>
                <div className='about_left'>
                    <img src='/Images/ronaldo.jpg'></img>
                </div>
                <div className='about_right' >
                    <div className='heading'><h1>A</h1><h2>bout</h2></div>
                    <p> I'm a front end developer, currently residing in Sydney, Australia.<br />
                    I have an expereince of working as a front end for more than 2 years now and have created a lot of responsive websites.<br/>
                    <span> Throughout the time I've learned  many technologies and am currently working with react js.</span></p>
                   <div className='about_label'> 
                  <FaMailBulk className='icons mail'/> <a href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCKCFTSrdNnjFNZlCZjsXjRRnSldRxvqdWVhThjGXTRPQZFpPcpWmRMhxqwtcjqlwtVpbqbq'>iamkamalsoni7@gmail.com</a> 
                  <br />

            
                  <FaGraduationCap className='icons grad'/> <p>Bachelor of Information Technology </p> 
                   </div>
                    
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default About