import React from 'react'
import { useLocation,Link } from 'react-router-dom'

function NavMenu() {
    const location = useLocation()
  return (
   <>
    <Link id = "home-btn" to={"/"}
        
        style={{color:location.pathname === "/"?"purple":"yellow"}}
       
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
         
   </>
  )
}

export default NavMenu
