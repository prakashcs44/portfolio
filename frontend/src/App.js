import React from 'react'
import {Routes,Route} from "react-router-dom"
import "./App.css"

import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import Resume from "./pages/Resume"
import Projects from "./pages/Projects"
import About from "./pages/About"

function App() {

 


  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/portfolio' element = {<Home/>}/>
        <Route path = '/portfolio/contact' element = {<Contact/>}/>
        <Route path='/portfolio/resume' element = {<Resume/>}/>
        <Route path='/portfolio/projects' element = {<Projects/>}/>
        <Route path='/portfolio/about' element = {<About/>}/>

      </Routes>
    <Footer/>
    </div>
  )
}

export default App
