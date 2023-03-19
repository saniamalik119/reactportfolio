import React from 'react'
import "./loader.css"
import { useState, useEffect } from 'react'
import {motion, AnimatePresence} from "framer-motion"
const Loader = () => {

const [items, setItems] = useState( ['Hi!', 'I am Sania Malik']);
const [currentIndex, setCurrentIndex] = useState(0);

const itemVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

useEffect(() => {
  const timer = setTimeout(() => {
    if (currentIndex < items.length) {
      setCurrentIndex(currentIndex + 1);
    }
  }, 700);

  return () => clearTimeout(timer);
}, [currentIndex, items.length]);


  return (
    <>
    
    <div className='loader'>
    <AnimatePresence>
    {items.slice(0, currentIndex).map((item, index) => (
        <motion.div
          key={item}
          className = 'items'
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={itemVariants}
          transition={{ duration: 0.6}}
          style={{fontFamily: "boogaloo", 
         marginLeft: '1rem'}}
        >
          {item}
        </motion.div>
      ))}
    </AnimatePresence>
   
    </div>
    
    </>
  )
}

export default Loader