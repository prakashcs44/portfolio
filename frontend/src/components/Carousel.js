import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import ArrowLeft from "../pictures/angle-circle-arrow-left-icon.svg"
import ArrowRight from '../pictures/angle-circle-arrow-right-icon.svg'



function Carousel({items}) {

const [slides,setSlides] = useState([])
const slidesContainerRef = useRef();
const [slidesWidth,setSlidesWidth] = useState(0);
const [currSlide,setCurrSlide] = useState();




useEffect(()=>{
setSlidesWidth(slidesContainerRef.current.getBoundingClientRect().width);

},[slidesContainerRef])


useEffect(()=>{


  const currSlides = slidesContainerRef.current.children;
  setCurrSlide(currSlides[0]);
  for(let i=0;i<currSlides.length;i++){
    
    currSlides[i].style.left = `${slidesWidth*i}px`;
   
  }

  setSlides(currSlides);
  
},[slidesWidth])






const moveSlides = (dist,targetSlide)=>{
  
    
   const slidesTrack = slidesContainerRef.current;
   
  slidesTrack.style.transform = `translateX(-${dist})`;
     
   setCurrSlide(targetSlide);
   
   }
 



const prev = ()=>{
  const prevSlide = currSlide.previousElementSibling;
  if(prevSlide){
  const amountToMove = prevSlide.style.left;
  
  moveSlides(amountToMove,prevSlide);
  }
}

const next = ()=>{
  
  const nextSlide = currSlide.nextElementSibling;
  if(nextSlide){
  const amountToMove = nextSlide.style.left;
  
  moveSlides(amountToMove,nextSlide);
  }
}




 




  return (
    <div className='carousel'>
      
        <div className='left-arrow'
         onClick={()=>prev()}
        >
       <img src={ArrowLeft}></img>
        </div>
        
     
        <div className='carousel-slides-container' >
         <div className=  "slides-track" ref={slidesContainerRef}>
          {items.map((item,index)=>{
           return <div className='carousel-slides' id={index}><img src= {item} alt='laro'></img></div>
          })}
          </div>
        </div>
      
       
   
      <div className='right-arrow'
       onClick={()=>next()}
      >
      <img src = {ArrowRight}></img>
      </div>
     
    </div>
  )
        }

export default Carousel
