import React from "react"
import { About, Footer, Header, Skills, Testimonial, Work} from "./constants"
import ClipLoader from "react-spinners/ClipLoader";
import {FaBars} from "react-icons/fa"
import Loader from "./constants/Loader";
import logo from "./assets/logo.png"
import {AiFillCloseCircle} from "react-icons/ai"
import "./App.css"
import { useState, useEffect } from "react"
function App() {
 const [loading, setLoading] = useState(false)
  const [show, setShow] = useState(true)
  useEffect(()=>{
    setLoading(true);
    setTimeout( ()=>{
      setLoading(false)
    }, 4000)
  },[])

  const handleShow = ()=>{
    setShow(!show)
  }
  function handeScroll(){
 
    const about = document.getElementById('about')
    
    const position = about.getBoundingClientRect()
    window.scrollTo(position.x, position.y)
  
  }
  
 
  return (

    <>
    {loading ? <Loader/>: 
       <div className="app">
     <div>
         <nav >
            <div className='navbar'>
                <img className='f-img' src={logo} alt= "logo" width='150'/>
                <ul className='ul'>
                <li className ='li-nav'><a 
                href="#home"
                onClick={()=>(handeScroll())}
                className="a-link">Home</a></li>
                <li className ='li-nav'><a 
                href="#about"
                onClick={()=>(handeScroll())}
                className="a-link">About</a></li>
                <li className ='li-nav'><a 
                href="#skills"
                onClick={()=>(handeScroll())}
                className="a-link">Skills</a></li>
                <li className ='li-nav'><a 
                href="#work"
                onClick={()=>(handeScroll())}
                className="a-link">projects</a></li>
                <li className ='li-nav'><a 
                href="#contact"
                onClick={()=>(handeScroll())}
                className="a-link">contact</a></li>
                   
                </ul>
              <div  className='bars'
              onClick={handleShow}>
              {show? <FaBars/>: <AiFillCloseCircle/> }
              {!show && <ul className='ul-nav'>
                <li className ='nav-item'><a 
                href="#home"
                onClick={()=>(handeScroll())}
                className="nav-link">Home</a></li>
                <li className ='nav-item'><a 
                href="#about"
                onClick={()=>(handeScroll())}
                className="nav-link">About</a></li>
                <li className ='nav-item'><a 
                href="#skills"
                onClick={()=>(handeScroll())}
                className="nav-link">Skills</a></li>
                <li className ='nav-item'><a 
                href="#work"
                onClick={()=>(handeScroll())}
                className="nav-link">projects</a></li>
                <li className ='nav-item'><a 
                href="#contact"
                onClick={()=>(handeScroll())}
                className="nav-link">contact</a></li>
                   
                </ul>}</div></div></nav></div>
  <div id="home">
    
  <Header/>
  </div>
     <div id = 'about'>
     <About/>
     </div>
    <div id="skills">
    <Skills/>
    </div>
      <div id="work">
      <Work/>
      </div>
    
    <div id="contact">
    <Testimonial/>
    </div>
     
     <Footer/>

     </div>}
    
    </>  
  )
}

export default App
//className='nav-link' 
//className='nav-item'
//className='ul-nav'>