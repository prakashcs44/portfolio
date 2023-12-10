import React, { useState } from 'react'

import HamburgerMenu from './HamburgerMenu'

import Menu from './Menu';

function Navbar() {
  
  const [menuHeight,setMenuHeight]  = useState("0px");


  return (
    <>
    <div className='navbar'>
        <div className='navbar-heading'>
          <h1> Prakash </h1>
          <h2> web_dev</h2>
        </div> 

      <div className='navbar-items'>
        <button id = "home-btn">
         _home
        </button>
        <button id = "about-btn">
            _about
            </button>
            <button id = "resume-btn">
             _resume
            </button>
            <button id = "contact-btn">
              _contact
            </button>
            <button id = "project-btn">
               _projects
            </button>
         
      </div>
     
     <Menu toggle={setMenuHeight} height={menuHeight}/>
    </div>
    <HamburgerMenu menuHeight = {menuHeight}/>
    </>
  )
}

export default Navbar
