import React  from 'react'
import GithubIcon from '../icons/GithubIcon'
import LinkedinIcon from "../icons/LinkedinIcon";
import MailIcon from '../icons/MailIcon';

function Footer() {

 







  return (
    <div className='footer' >
      <div className='handles'>
        <a href={"https://github.com/prakashcs44"}>
        <GithubIcon/>
        </a>
       <a href='mailto:prakashbhattarai303@gmail.com'>
       <MailIcon color = "white"/>
       </a>
      
     
       <a href={"https://www.linkedin.com/in/prakash-bhattarai-1624b7247/"}>
       <LinkedinIcon/>
       </a>
        
      </div>
      <div className='made-by'>Made by Prakash bhattarai 2023</div>
    </div>
  )
}

export default Footer
