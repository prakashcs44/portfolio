import React, { useEffect, useRef, useState } from 'react'

function SkillsPercentageBar({percentage}) {

const [barWidth,setBarWidth] = useState(0);

const percentageBarContainerRef = useRef();


useEffect(()=>{
 const totalWidth = (percentageBarContainerRef.current.getBoundingClientRect().width);
 setBarWidth(totalWidth*(percentage/100));

},[percentageBarContainerRef,percentage])





  return (
    <div className='skills-percentage-bar' ref={percentageBarContainerRef}
    >
       <div
       style={{width:`${barWidth}px`}}
       
       ></div>
    </div>
  )
}

export default SkillsPercentageBar
