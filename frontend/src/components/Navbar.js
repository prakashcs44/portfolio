import React, { useState } from 'react'

import HamburgerMenu from './HamburgerMenu'

import Menu from './Menu';
import { Link } from 'react-router-dom';

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
        <Link id = "home-btn" to={"/"}>
         _home
        </Link>
        <Link id = "about-btn" to={"/about"}>
            _about
            </Link>
            <Link id = "resume-btn" to={"/resume"}>
             _resume
            </Link>
            <Link id = "contact-btn" to={"/contact"}>
              _contact
            </Link>
            <Link id = "project-btn" to={"/projects"}>
               _projects
            </Link>
         
      </div>
     
     <Menu toggle={setMenuHeight} height={menuHeight}/>
    </div>
    <HamburgerMenu menuHeight = {menuHeight}/>
    </>
  )
}

export default Navbar
