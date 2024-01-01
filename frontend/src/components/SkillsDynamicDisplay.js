import React, { useState ,useEffect} from 'react'
import useDynamicNameDisplay from '../hooks/useDynamicNameDisplay'






  

  


function SkillsDynamicDisplay() {

    const dynamicName = useDynamicNameDisplay("Full stack developer");
     
  return (
    <div className='dynamic-name-display-container'>
      <h3>HI I'M PRAKASH,A...</h3>
      <h1>{dynamicName}</h1>
    </div>
  )
}

export default SkillsDynamicDisplay
