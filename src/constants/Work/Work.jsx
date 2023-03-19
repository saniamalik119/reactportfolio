import React from 'react'
import "./Work.css"

import { motion} from "framer-motion"
import real from "../../assets/real.png"
import book from "../../assets/book.png"
import todo from "../../assets/todo.png"

import {AiFillEye} from "react-icons/ai"
import {AiFillGithub} from "react-icons/ai"
const Work = () => {

 
   const items = [
    {
      id:1,
      src: real,
      h3: "Real Estate [ Landing Page ]",
      eyeHref: 'https://saniamalik119.github.io/realestate/',
      gitHref: 'https://github.com/saniamalik119/realestate'
    },
    {
      id:2,
      src: book,
      h3: "Book Store [ Landing Page ]",
      eyeHref: 'https://saniamalik119.github.io/book-shelf/',
      gitHref: 'https://github.com/saniamalik119/book-shelf'

      
    },
    {
      id:3,
      src: todo,
      h3: "ToDo App",
      eyeHref: 'https://friendly-bat-garment.cyclic.app/',
      gitHref: 'https://github.com/saniamalik119/todolist'
    },
   ]
  return (
    <>
    <div className='work'>
    <motion.div
    initial={{ opacity: 0, translateX: -100}}
  whileInView={{ opacity: 1, translateX:0 }}
  viewport={{ once: false }}
  transition= {{delay: 0.4, default: { ease: "linear" }}}>


  <h2 className='h2-w'>My Portfolio</h2>
  <div className='cards'>
  {items.map(({id, src, h3, eyeHref,gitHref})=>(
    <div
    
    key={id}
     className='card'>
  <img  className='w-img' src={src} alt='sani' width='300'
  />
<div className='icon-class'>
<a href={eyeHref} target='_blank'><AiFillEye className='icons-e' size={30}/></a>
 <a href={gitHref} target = '_blank'><AiFillGithub className='icons-g' size={30}/></a>
  
  </div>

 
  
  <h3 className='title'>{h3}</h3>
  
 </div>
  ))}
  
    

  </div>
  </motion.div>
   
    </div>
    </>

  )
}

export default Work