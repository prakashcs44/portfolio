import React from 'react'

function HamburgerMenu({menuHeight}) {
  const buttonDisplay = menuHeight === "0px"?"none":"inline-block";
 
  return (
    <div className='hmbg-menu'
    
    style={{height:menuHeight}}
    
    >
       
        <button style={{display:buttonDisplay}}>
         _home
        </button >
        <button style={{display:buttonDisplay}}>
            _about
            </button>
            <button style={{display:buttonDisplay}} >
             _resume
            </button>
            <button style={{display:buttonDisplay}}>
              _contact
            </button>
            <button style={{display:buttonDisplay}}>
              _projects
            </button>
          
    
    </div>
  )
}

export default HamburgerMenu
