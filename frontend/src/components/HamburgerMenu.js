import React from 'react'

function HamburgerMenu({display}) {
  return (
    <div className='hmbg-menu'
    
    style={{display:`${display}`}}
    
    >
       
        <button>
         _home
        </button>
        <button>
            _about
            </button>
            <button >
             _resume
            </button>
            <button>
              _contact
            </button>
          
    
    </div>
  )
}

export default HamburgerMenu
