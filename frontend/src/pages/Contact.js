import React, { useEffect, useRef } from 'react'
import AdressIcon from "../icons/AdressIcon"
import ShareIcon from "../icons/ShareIcon"
import MailIcon from "../icons/MailIcon"
import CallIcon from "../icons/CallIcon"
import LinkedinIcon from "../icons/LinkedinIcon"
import upsideLoading from '../utility/IntersectionObserver';
import InstaIcon from "../pictures/ig-instagram-icon.svg"
function Contact() {



  const contactPageRef = useRef();
  useEffect(()=>{
    if(contactPageRef.current)
    upsideLoading(contactPageRef.current)
    
  })
  





  return (

<div className='contact-page animating-upward-loading ' ref={contactPageRef}>

   <h1 className='heading-contact ' >CONTACT ME</h1>
    <div className='address'>
    <div className='address-head'>
    <AdressIcon/> 
    <h2> My Adress</h2>
    </div>
  
     <p>Naharlagun,Arunachal Pradesh</p>
    </div>
    <div className='social-profiles'>
      <div className='social-profiles-head'>
      <ShareIcon/> 
      <h2> Social profiles</h2>
      </div>
      <div className='social-media-icons'>
      <LinkedinIcon/>
       <img src={InstaIcon}
       
       style={{width:"40px",height:"40px"}}
       
       ></img>
      </div>
    

     

    </div>
    <div className='email'>
     <div className='email-head'>
     <MailIcon color = {"green"}/>
     <h2>Email me</h2>
     </div>
     
     <p>prakashbhattarai@gmail.com</p>
   

    </div>
    <div className='call'>
      <div className='call-head'>
      <CallIcon/>
      <h2>call me</h2>
      </div>
     
      <p>+919612565045/6033954761</p>
     
    </div>


   <div className='contact-message'>
    <div className='your-name'>
    <label for = "your-name">Your Name</label>
    <input name='your-name' id='your-name'/>
    </div>
     <div className='your-email'>
    <label for = "your-email">Your Email</label>
    <input name='your-email' id = "your-email"/>
    </div>
       <div className='subject'>
      <label for = "subject">Subject</label>
      <input id='subject' name='subject'/>
      </div>
    
    <div className='message'>
      <label for = "message">Message</label>
    <textarea name='message' id = "message">
    
    </textarea>
    </div>
    <button className='send-btn'>Send Message</button>
   </div>
   </div>
  )
}

export default Contact
