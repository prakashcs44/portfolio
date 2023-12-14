import React, { useState } from 'react'

import HamburgerMenu from './HamburgerMenu'

import Menu from './Menu';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
const location = useLocation()
 

  const [menuHeight,setMenuHeight]  = useState("0px");


  return (
    <>
    <div className='navbar'>
        <div className='navbar-heading'>
          <h1> Prakash </h1>
          <h2> web_dev</h2>
        </div> 

      <div className='navbar-items'>
        <Link id = "home-btn" to={"/portfolio"}
        
        style={{color:location.pathname === "/portfolio"?"purple":"yellow"}}
        >
         _home
        </Link>
        <Link id = "about-btn" to={"/about"}
        
        style={{color:location.pathname === "/about"?"purple":"yellow"}}
        
        >
            _about
            </Link>
            <Link id = "resume-btn" to={"/resume"}
            
            style={{color:location.pathname === "/resume"?"purple":"yellow"}}
            >
             _resume
            </Link>
            <Link id = "contact-btn" to={"/contact"}
            
            style={{color:location.pathname === "/contact"?"purple":"yellow"}}
            >
              _contact
            </Link>
            <Link id = "project-btn" to={"/projects"}
            style={{color:location.pathname === "/projects"?"purple":"yellow"}}
            >
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
