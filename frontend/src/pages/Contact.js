import React from 'react'
import AdressIcon from "../icons/AdressIcon"
import ShareIcon from "../icons/ShareIcon"
import MailIcon from "../icons/MailIcon"
import CallIcon from "../icons/CallIcon"
function Contact() {
  return (

<div className='contact-page'>

   <h1 className='heading-contact'>CONTACT ME</h1>
    <div className='address'>
    
     <h2>    <AdressIcon/> My Adress</h2>
       <p>Naharlagun,Arunachal Pradesh</p>
    </div>
    <div className='social-profiles'>
     
     <h2>   <ShareIcon/> Social profiles</h2>

    </div>
    <div className='email'>
     
     <h2> <MailIcon/>  Email me</h2>
     <p>prakashbhattarai@gmail.com</p>

    </div>
    <div className='call'>
      <h2><CallIcon/>call me</h2>
      <p>+919612565045</p>
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
