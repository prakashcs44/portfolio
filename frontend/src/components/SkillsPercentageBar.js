import React, { useEffect, useRef, useState } from 'react'

function SkillsPercentageBar({percentage}) {

const [barWidth,setBarWidth] = useState(0);

const percentageBarContainerRef = useRef();


useEffect(()=>{
 const totalWidth = (percentageBarContainerRef.current.getBoundingClientRect().width);
 setBarWidth(totalWidth*(percentage/100));

},[percentageBarContainerRef,percentage])


const progressBarRef = useRef();


const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    const target = entry.target;
     if(entry.isIntersecting&&target.classList.contains("animating-progress-loading")){
       target.classList.toggle("show-progress-bar-loading");
       target.classList.remove("animating-progress-loading");
     }
   })
})


useEffect(()=>{
  if(progressBarRef.current){
    observer.observe(progressBarRef.current)
  }
  return ()=>{
    if(progressBarRef.current)
    observer.unobserve(progressBarRef.current);
  }
},[])

  return (
    <div className='skills-percentage-bar' ref={percentageBarContainerRef}
    >
       <div ref={progressBarRef} className='animating-progress-loading'
       style={{width:`${barWidth}px`}}
       
       ></div>
    </div>
  )
}

export default SkillsPercentageBar
