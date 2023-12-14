import React from 'react'
import { Link } from 'react-router-dom';

function HamburgerMenu({menuHeight}) {
  const buttonDisplay = menuHeight === "0px"?"none":"inline-block";
 
  return (
    <div className='hmbg-menu'
    
    style={{height:menuHeight}}
    
    >
       
        <Link style={{display:buttonDisplay}} to={"/portfolio"}>
         _home
        </Link>
        <Link style={{display:buttonDisplay}} to={"/about"}>
            _about
            </Link>
            <Link style={{display:buttonDisplay}} to={"/resume"}>
             _resume
            </Link>
            <Link style={{display:buttonDisplay}} to={"/contact"}>
              _contact
            </Link>
            <Link style={{display:buttonDisplay}} to={"/projects"}>
              _projects
            </Link>
          
    
    </div>
  )
}

export default HamburgerMenu
