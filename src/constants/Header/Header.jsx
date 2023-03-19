import React from 'react'
import sani from "../../assets/sani.png"

import "./Header.css"

const Header = () => {
// const headerRef = useRef(null)
// useEffect(()=>{
//   gsap.from(headerRef.current, {
//     duration: 1,
//     autoAlpha: 0,
//     ease: 'none',
//     delay: 1
//   }, [])
// })
  return (
    <>
    <div className='h-div' >
    
      <div className='part'>
      <h1 className='h-part'>Designer</h1>
        <p className='p-part'>my passion lies in creating user-centered designs that not only look aesthetically pleasing but also provide a seamless and intuitive experience for the user. I specialize in designing websites, web applications, and digital products</p>
      </div>
      <div >
         <img className='header-img' src={sani} alt ="sani" width='450'/>
      </div>
      <div className='part'>
      <h1 className='h-part'>&lt;Developer&gt;</h1>
        <p className='p-part'>As a web developer, my focus is on creating robust and dynamic websites and web applications that meet the needs of clients and users alike. I specialize in using a range of programming languages, frameworks, and tools to build custom solutions that are both efficient and effective.</p>
      </div>
    </div>
  
    </>
  )
}

export default Header