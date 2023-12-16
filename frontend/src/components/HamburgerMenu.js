import React from 'react'
import { Link } from 'react-router-dom';
import NavMenu from './NavMenu';

function HamburgerMenu({menuHeight}) {
  const buttonDisplay = menuHeight === "0px"?"none":"flex";
 
  return (
    <div className='hmbg-menu'
    
    style={{display:buttonDisplay,height:menuHeight}}
    
    >
       
      <NavMenu/>
          
    
    </div>
  )
}

export default HamburgerMenu
