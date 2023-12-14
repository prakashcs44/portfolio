import React from 'react'
import SkillsDynamicDisplay from '../components/SkillsDynamicDisplay'
import Main from '../components/Main'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'


function Home() {
  return (
    <div>
      <SkillsDynamicDisplay/>
      <Main/>
      
      <Skills/>
     
    </div>
  )
}

export default Home
