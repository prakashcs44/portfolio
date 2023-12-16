import React, { useState } from 'react'

import HamburgerMenu from './HamburgerMenu'

import Menu from './Menu';
import { Link, useLocation } from 'react-router-dom';
import NavMenu from './NavMenu';

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
       <NavMenu/>
      </div>
     
     <Menu toggle={setMenuHeight} height={menuHeight}/>
    </div>
    <HamburgerMenu menuHeight = {menuHeight}/>
    </>
  )
}

export default Navbar
