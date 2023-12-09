import React from 'react'

import Carousel from './Carousel';

import jsSvg from "../pictures/javascript.svg"
import cppSvg from "../pictures/c++.svg"
import htmlSvg from "../pictures/html.svg"
import cssSvg from "../pictures/css.svg"
function Skills() {

  return (
    <div className='skills-container'>
      <h1>My skills</h1>
       <Carousel items={[jsSvg,cppSvg,htmlSvg,cssSvg]}/>
    </div>
  )
}

export default Skills
