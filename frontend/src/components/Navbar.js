import React, { useState } from 'react'

import HamburgerMenu from './HamburgerMenu'

import Menu from './Menu';

function Navbar() {
  
  const [showHmbgMenu,setShowHmbgMenu]  = useState("none");


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
         
      </div>
     
     <Menu toggle={setShowHmbgMenu} display={showHmbgMenu}/>
    </div>
    <HamburgerMenu display = {showHmbgMenu}/>
    </>
  )
}

export default Navbar
