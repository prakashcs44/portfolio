import React from 'react'
import { Link } from 'react-router-dom';

function HamburgerMenu({menuHeight}) {
  const buttonDisplay = menuHeight === "0px"?"none":"flex";
 
  return (
    <div className='hmbg-menu'
    
    style={{display:buttonDisplay,height:menuHeight}}
    
    >
       
        <Link  to={"/portfolio"}>
         _home
        </Link>
        <Link  to={"/about"}>
            _about
            </Link>
            <Link  to={"/resume"}>
             _resume
            </Link>
            <Link  to={"/contact"}>
              _contact
            </Link>
            <Link  to={"/projects"}>
              _projects
            </Link>
          
    
    </div>
  )
}

export default HamburgerMenu
