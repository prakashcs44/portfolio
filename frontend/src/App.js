import React from 'react'
import {Routes,Route} from "react-router-dom"
import "./App.css"

import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contact from './pages/Contact'
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path = '/contact' element = {<Contact/>}/>
      </Routes>
    <Footer/>
    </div>
  )
}

export default App
