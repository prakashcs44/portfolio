import React, { useRef ,useEffect} from 'react'
import img from "../pictures/pic2.jpg"
import { Link } from 'react-router-dom'
import upsideLoading from '../utility/IntersectionObserver';
function Projects() {

const projectPageRef = useRef();
  
useEffect(()=>{
  if(projectPageRef.current)
  upsideLoading(projectPageRef.current)
  
},[])






  return (
    <div className='project-page  animating-upward-loading' ref={projectPageRef}>
    <h1 className='project-page-heading'>MY PROJECTS</h1>
    <div className='projects-container'>
      <div className='project'>
        <h2 className='project-name'>CHAT BOT</h2>
        <img className='project-img'  src  = {img}   alt='project'></img>
        <h3 className='project-date'>sept 2023 - nov 12</h3>
        <div className='project-desc'>
         <h3>Chat bot using bard api and react</h3>
        </div>
        <div className='project-links'>
       <Link to = "https://github.com/prakashcs44/ai-chatbot" className='project-source'>SOURCE</Link>
       <Link className='project-source'>DEMO</Link>
       </div>
      </div>
      <div className='project'>
        <h2 className='project-name'>BLOG APP</h2>
        <img className='project-img'  src  = {img}   alt='project'></img>
        <h3 className='project-date'>july 2023 - aug 12</h3>
        <div className='project-desc'>
         <h3>full stack blog app using react and express js</h3>
        </div>
        <div className='project-links'>
       <Link  to = "https://github.com/prakashcs44/React-blog-app"   className='project-source'>SOURCE</Link>
       <Link className='project-source'>DEMO</Link>
       </div>
      </div>
      </div>


      <div className='projects-container'>
      <div className='project'>
        <h2 className='project-name'>CHAT APP</h2>
        <img className='project-img'  src  = {img}   alt='project'></img>
        <h3 className='project-date'>nov 2023 - dec 5</h3>
        <div className='project-desc'>
         <h3>Chat app using react express and socket io</h3>
        </div>
        <div className='project-links'>
       <Link to = "https://github.com/prakashcs44/chat-app" className='project-source'>SOURCE</Link>
       <Link className='project-source'>DEMO</Link>
       </div>
      </div>
      <div className='project'>
        <h2 className='project-name'>MOVIE SEARCH </h2>
        <img className='project-img'  src  = {img}   alt='project'></img>
        <h3 className='project-date'>sep 2023 - nov 5</h3>
        <div className='project-desc'>
         <h3>Movie search website using react and omdb api</h3>
        </div>
        <div className='project-links'>
       <Link to = "https://github.com/prakashcs44/movie-search-app" className='project-source'>SOURCE</Link>
       <Link className='project-source'>DEMO</Link>
       </div>
      </div>
      </div>
    
    
      


     
     
    
    
    </div>
  )
}

export default Projects
