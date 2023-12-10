import React from 'react'
import CloseIcon from "../icons/CloseIcon"
import OpenIcon from "../icons/OpenIcon"
function Menu({toggle,height}) {




const showMenu = ()=>{
  if(height === '0px'){
    toggle("300px")
  }
  else{
    toggle("0px");
  }
}


  return (
    <div className='menu-lines-container'
    
    onClick={()=>showMenu()}
    >
     {height === "300px"?(<CloseIcon/>):(<OpenIcon/>)}

    </div>
  )
}

export default Menu
