import React from 'react'
import Navbar from './components/Navbar'
import "./App.css"
import SkillsDynamicDisplay from './components/SkillsDynamicDisplay'
import Main from './components/Main'
import AboutMe from './components/AboutMe'
function App() {
  return (
    <div>
      <Navbar/>
      <SkillsDynamicDisplay/>
      <Main/>
      <AboutMe/>

    </div>
  )
}

export default App
