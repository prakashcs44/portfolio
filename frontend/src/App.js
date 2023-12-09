import React from 'react'
import Navbar from './components/Navbar'
import "./App.css"
import SkillsDynamicDisplay from './components/SkillsDynamicDisplay'
import Main from './components/Main'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Footer from './components/Footer'
function App() {
  return (
    <div>
      <Navbar/>
      <SkillsDynamicDisplay/>
      <Main/>
      <AboutMe/>
      <Skills/>
      <Footer/>
    </div>
  )
}

export default App
