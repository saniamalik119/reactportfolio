import React from 'react'
import "./Skills.css"
import html from "../../assets/html.png"
import css from "../../assets/css.png"
import javascript from "../../assets/javascript.png"

import node from "../../assets/node.png"
import tailwind from "../../assets/tailwind.png"
import mongo from "../../assets/mongo.png"
import next from "../../assets/nextjs.png"
import react from "../../assets/react.png"

import {motion} from "framer-motion"
const Skills = () => {
  const Frontend = [
    {id: 1, src: html, title: "html", color: "rgb(228, 77, 38)", description: "creating and structuring web pages using HTML5, forms, and accessibility standards"},
    {id: 2, src: css, title: "Css",color: "rgb(3, 155, 229)", description: "styling and formatting web pages using CSS3, knowledge of selectors,and responsive design"},
    {id: 3, src: javascript, title: "Javascript",color: "rgb(204, 171, 0)", description: "creating interactive web pages using JavaScript,with DOM manipulation, and event handling"}]
    const backend = [
      {id: 1, src: node, title: "Node", color: "rgb(140, 200, 75)", description: "developing server-side applications and APIs using Node.js, with NPM packages with callbacks and Promises."},
      {id: 2, src: mongo, title: "MongoDB", color: "rgb(80, 150, 70)", description: "implementing databases using MongoDB, with document-based data modeling,"},
      {id: 3, src: next, title: "NextJs", color: "rgb(0, 0, 0)", description: "building scalable web applications using Next.js, with server,client side routing and backend services "},
    ]
    const framework =[
      {id: 1, src: tailwind, title: "Tailwind Css", color: "rgb(68, 168, 179)", description: "prototyping and styling web pages using the utility-first approach of Tailwind CSS."},
      {id: 2, src: react, title: "React Js", color: "rgb(0, 216, 255)", description: "building dynamic and reusable user interfaces using React.js, with components, JSX syntax, state management with Redux"},
      {id: 3, src: 'https://cdn-icons-png.flaticon.com/512/5968/5968672.png', title: "Bootstrap 5", color: "rgb(94, 59, 127)", description: "Proficient in designing responsive web pages using Bootstrap 5 framework"},
    ]
  return (

    <div className='skils'><h1 className='s-s'>My Skills</h1>

    <div className='parent'>
     <motion.div
      initial={{ opacity: 0, translateX: -100}}
     whileInView={{ opacity: 1, translateX:0 }}
     viewport={{ once: false }}
      transition= {{delay: 0.4, default: { ease: "linear" }}}
     >
      <div  className='width'><h2 className='head'>Frontend:</h2>
      {Frontend.map(({id, src, title,color, description})=>(
        <div key={id} className='grid'>
      <img className='img-s' src={src} alt='sania' width='80'/>
      <div>
      <p style={{color}} className='title'>{title}</p>
      <p className='discription'>{description}</p></div>
      </div>
      ))}
      
      </div>
      </motion.div>
      <motion.div
       initial={{ opacity: 0, translateX: -100}}
     whileInView={{ opacity: 1, translateX:0 }}
     viewport={{ once: false }}
      transition= {{delay: 0.6, default: { ease: "linear" }}}
      >
      
      <div  className='width'><h2 className='head'>Backend:</h2>
      {backend.map(({id, src, title,color, description})=>(
        <div key={id} className='grid'>
      <img className='img-s' src={src} alt='sania' width='80'/>
      <div>
      <p style={{color}} className='title'>{title}</p>
      <p className='discription'>{description}</p></div>
      </div>
      ))}
      
      </div>
      </motion.div>
      <motion.div
       initial={{ opacity: 0, translateX: -100}}
     whileInView={{ opacity: 1, translateX:0 }}
     viewport={{ once: false }}
      transition= {{delay: 0.8, default: { ease: "linear" }}}
      >
      <div  className='width'><h2 className='head'>Framewroks:</h2>
      {framework.map(({id, src, title,color, description})=>(
        <div key={id} className='grid'>
      <img className='img-s' src={src} alt='sania' width='80'/>
      <div>

      <p style={{color}} className='title'>{title}</p>
      <p className='discription'>{description}</p></div>
      </div>

      ))}

      
      </div>
      </motion.div>
    </div>
    <motion.div  initial={{ opacity: 0, translateX: 100}}
     whileInView={{ opacity: 1, translateX:0  }}
     viewport={{ once: false }}
      transition= {{delay: 0.6, default: { ease: "linear" }}}
    
      >
    
    {/* <div className='all-img'>
   <img src={hel} alt='san' width='400' className='img-s2'/></div> */}
    <div className='services'>
    <h1 className='s-ser'>MY Services</h1>
    <div className='p'>
    <div className='cardss'>
    <p><span className='strong st'> web development</span> <br/> My web development services offer custom solutions for businesses of all sizes, whether you need a simple brochure website or a complex web application. We specialize in developing <strong> responsive, user-friendly and Animated websites</strong> that are optimized for search engines and designed to meet your specific business objectives. <br/>
    <br/>
   <strong> My services include:</strong>
    <br/>
    <br/>
<span className='points'>
↪ Custom website design and development<br/>
↪ E-commerce website development<br/>
↪ CMS development and integration<br/>
↪ Mobile-friendly web development<br/>
↪ Website maintenance and support
</span>

    
    </p>
    
    </div>
    <div className='cardss'>
    <p> <span className='strong se'> ui/ux design</span> <br/>I specialize in creating intuitive and immersive user interfaces that are designed to meet your business goals while enhancing your brand identity. UI/UX design services help businesses create visually stunning and user-friendly digital experiences that engage and delight their customers.<br/>
    <br/>
   <strong> My services include:</strong>
    <br/>
    <br/>
<span className='points'>
↪  User research and persona development<br/>
↪ Information architecture and wireframing<br/>
↪ Prototyping and user testing<br/>
↪ Responsive design and mobile app design
<br/>

</span></p>
    
    </div>
    

    {/* <div className='cardss'>
    <p> <span className='strong th'> Chrome Extensions</span> <br/> Web development is my passion and i am cery confident abour i </p>
    
    </div> */}
    
    
   
    </div>
    
   
    </div>  
</motion.div>
 
    </div>
    
    


  
  )
}

export default Skills