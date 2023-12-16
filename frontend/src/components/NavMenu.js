import React from 'react'
import { useLocation,Link } from 'react-router-dom'

function NavMenu() {
    const location = useLocation()
  return (
   <>
    <Link id = "home-btn" to={"/portfolio"}
        
        style={{color:location.pathname === "/portfolio"?"purple":"yellow"}}
       
        >
         _home
        </Link>
        <Link id = "about-btn" to={"/portfolio/about"}
        
        style={{color:location.pathname === "/portfolio/about"?"purple":"yellow"}}
        
        >
            _about
            </Link>
            <Link id = "resume-btn" to={"/portfolio/resume"}
            
            style={{color:location.pathname === "/portfolio/resume"?"purple":"yellow"}}
            >
             _resume
            </Link>
            <Link id = "contact-btn" to={"/portfolio/contact"}
            
            style={{color:location.pathname === "/portfolio/contact"?"purple":"yellow"}}
            >
              _contact
            </Link>
            <Link id = "project-btn" to={"/portfolio/projects"}
            style={{color:location.pathname === "/portfolio/projects"?"purple":"yellow"}}
            >
               _projects
            </Link>
         
   </>
  )
}

export default NavMenu
