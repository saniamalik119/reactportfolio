import React from 'react'

import "./About.css"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/scrollTrigger'
import flower from "../../assets/flower.png"
import {SiGmail} from "react-icons/si"
import {AiFillLinkedin} from "react-icons/ai"
import {FiInstagram} from "react-icons/fi"
import {useRef, useEffect} from "react"
gsap.registerPlugin(ScrollTrigger)

const About = () => {
const aboutRef = useRef(null)
useEffect(()=>{
  const about= aboutRef.current
 
  gsap.from(about, {
    duration: 1,
    translateX: -100,
   
    scrollTrigger: {
      trigger: about,
      start: "top 80%",
    end: "bottom 50%"
    }
  })
},[])
  
  return (

    <div className='about' id='about' ref={aboutRef}>
   <div className='upper'>
   
   <div className='left'>
   
   <h1 className='h-a'>About Me</h1>
    <p className='p-a'> My Name Is Sania Malik. As a full-stack web developer, I have a passion for creating innovative and dynamic web applications that solve complex problems and deliver real value to users. With expertise in both front-end and back-end development, I am able to design and build custom solutions that meet the unique needs of each client.</p>
    <br/>
    <p className='p-a'>My skillset includes proficiency in a range of programming languages, frameworks, and tools, including HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB</p>
    <br/>
    <hr className='hr'/>
   <a className='social' href='mailto: sania.malik147258@gmail.com'><SiGmail size={30}/></a>
   <a className='social' href='https://www.instagram.com/web_div_loper18/'><FiInstagram size={30}/></a>
   <a className='social' href='https://www.linkedin.com/in/sania-malik-5844a4250/'><AiFillLinkedin size={30}/></a>
   </div>
   <div className='right'>
    <img className='img' src={flower} alt='sani' width='350'/>
   </div>
    
   </div>
    </div>
  )
}

export default About