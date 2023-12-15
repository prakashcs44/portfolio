import React from 'react'
import SkillsDynamicDisplay from '../components/SkillsDynamicDisplay'
import Main from '../components/Main'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'
import About from "./About"
import Projects from "./Projects"
import Contact from "./Contact"
function Home() {
  return (
    <div>
      <SkillsDynamicDisplay/>
       <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default Home
