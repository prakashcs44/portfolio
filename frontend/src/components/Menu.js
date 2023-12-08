import React from 'react'
import CloseIcon from "../icons/CloseIcon"
import OpenIcon from "../icons/OpenIcon"
function Menu({toggle,display}) {




const showMenu = ()=>{
  if(display === 'flex'){
    toggle("none")
  }
  else{
    toggle("flex");
  }
}


  return (
    <div className='menu-lines-container'
    
    onClick={()=>showMenu()}
    >
     {display === "flex"?(<CloseIcon/>):(<OpenIcon/>)}

    </div>
  )
}

export default Menu
