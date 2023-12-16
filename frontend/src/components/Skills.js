import React, { useRef ,useEffect} from 'react'

import Carousel from './Carousel';

import jsSvg from "../pictures/javascript.svg"
import cppSvg from "../pictures/c++.svg"
import htmlSvg from "../pictures/html.svg"
import cssSvg from "../pictures/css.svg"
import reactSvg from "../pictures/react.svg"
import mongoSvg from "../pictures/mongo.svg"
import nodeSvg from "../pictures/node.svg"
import upsideLoading from '../utility/IntersectionObserver';

function Skills() {

const skillsRef = useRef();
useEffect(()=>{
  if(skillsRef.current)
  upsideLoading(skillsRef.current)
  
})



  return (
    <div className='skills-container animating-upward-loading' ref={skillsRef}>
      <h1>Technical skills</h1>
       <Carousel items={[htmlSvg,cssSvg,cppSvg,jsSvg,reactSvg,mongoSvg,nodeSvg]}/>
    </div>
  )
}

export default Skills
