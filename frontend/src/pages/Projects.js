import React, { useRef ,useEffect} from 'react'
import p1img from "../files/homepage-GoogleChrome2024-04-2710-31-15-ezgif.com-video-to-gif-converter.gif"
import p2img from "../files/Graphvisualizer-GoogleChrome2024-04-2710-32-48-ezgif.com-video-to-gif-converter.gif"
import p3img from "../files/Document-GoogleChrome2024-04-2711-36-23-ezgif.com-video-to-gif-converter.gif"
import p4img from "../files/Moviesearch-GoogleChrome2024-04-2711-51-51-ezgif.com-video-to-gif-converter.gif"
import upsideLoading from '../utility/IntersectionObserver';

const projects = [
  {
    name:"Ecommerce website",
    imgLink:p1img,
    desc:"Full stack ecommerce website built using MERN stack",
    sourceLink:"https://github.com/prakashcs44/ecommerce_website",
    demoLink:"https://ecommerce-website-jwke.vercel.app",

  },
  {
    name:"Graph visualiser",
    imgLink:p2img,
    desc:"Graph visualiser where you can visualisze dfs and bfs algorithms",
    sourceLink:"https://github.com/prakashcs44/graph_visualizer",
    demoLink:"https://prakashcs44.github.io/graph-visualizer/",

  },
  {
    name:"Flappy Bird",
    imgLink:p3img,
    desc:"Flappy bird game ",
    sourceLink:"https://github.com/prakashcs44/flappy_bird",
    demoLink:"https://prakashcs44.github.io/flappy_bird/",

  },
  {
    name:"Movie search",
    imgLink:p4img,
    desc:"Movie searching website that used omdp api to fetch movies ",
    sourceLink:"https://github.com/prakashcs44/flappy_bird",
    demoLink:"https://prakashcs44.github.io/flappy_bird/",

  },
 
]


function Projects() {


const projectPageRef = useRef();
  
useEffect(()=>{
  let observer;
  if(projectPageRef.current)
  observer = upsideLoading(projectPageRef.current)
  

  return ()=>{
    if(projectPageRef.current)
    observer.unobserve(projectPageRef.current);
  }
},[])






  return (
    <div className='project-page  animating-upward-loading' ref={projectPageRef}>
    <h1 className='project-page-heading'>MY PROJECTS</h1>
    <div className='projects-container'>

      {
        projects.map(project=>{
          return (
            <div className='project'>
            <h2 className='project-name'>{project.name}</h2>
            <img className='project-img'  src  = {project.imgLink}   alt={project.name}></img>
           
            <div className='project-desc'>
             <h3>{project.desc}</h3>
            </div>
            <div className='project-links'>
           <a href = {project.sourceLink} className='project-source'>SOURCE</a>
           <a href={project.demoLink} className='project-source'>DEMO</a>
           </div>
          </div>
         
          )
        })
      }

      
      </div>


    
      </div>
    
    
      


     
     
    
    
    
  )
}

export default Projects
