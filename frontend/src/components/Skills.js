import React from 'react'

import Carousel from './Carousel';
import CppIcon from "../icons/CppIcon";
import CssIcon from "../icons/CssIcon";
import HtmlIcon from "../icons/HtmlIcon";
import JsIcon from '../icons/JsIcon';

function Skills() {

  return (
    <div className='skills-container'>
      <h1>My skills</h1>
       <Carousel item1={<CppIcon/>} item2={<CssIcon/>} item3={<HtmlIcon/>}/>
    </div>
  )
}

export default Skills
