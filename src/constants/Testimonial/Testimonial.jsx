import React from 'react'
import "./Testimonial.css"
const Testimonial = () => {
  
  return (
   
   <div className='contact'>
   
    <h1 className='s-sc'>Lets Work Together</h1>


  <div className="container">
    <div className="content">
      <div className="left-side">
        <div className="address details">
          <i className="fas fa-map-marker-alt"></i>
          <div className="topic">Address</div>
          <div className="text-one">House no.210 Block 5 Sector D1 Green Town Lahore</div>
         
        </div>
        <div className="phone details">
          <i className="fas fa-phone-alt"></i>
          <div className="topic">Phone</div>
          <div className="text-one">+923220147048</div>
          <div className="text-two">+923424452717</div>
        </div>
        <div className="email details">
          <i className="fas fa-envelope"></i>
          <div className="topic">Email</div>
          <div className="text-one">Sania.malik147258@gmail.com</div>
          <div className="text-two"></div>
        </div>
      </div>
      <div className="right-side">
        <div className="topic-text">Contact our Business now</div>
        <p className='p-t'>If you have any work from me you can send me message from here. It's my pleasure to help you.</p>
        <form
  action="https://formspree.io/f/xknavwop"
  method="POST"
>
  <label>
    Your email:
    <input type="email" name="email" className='input-box'/>
  </label>
  <label>
    Your message:
    <div className= 'input-box'>
    <textarea name="message" className='message-box'></textarea>
    </div>
    
  </label>
  
  <button type="submit" className='button'>Send</button>
</form>
    </div>
    </div>
  </div>

  
   </div>
  

  )
}

export default Testimonial