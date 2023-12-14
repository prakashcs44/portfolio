import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import ArrowLeft from '../icons/ArrowLeft'
import ArrowRight from '../icons/ArrowRight'



function Carousel({items}) {

const [slides,setSlides] = useState([])
const slidesContainerRef = useRef();
const [slidesWidth,setSlidesWidth] = useState(0);
const [currSlide,setCurrSlide] = useState();

const autoSlidingIntervalIdRef = useRef(null);



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



// useEffect(()=>{

// console.log(currSlide?.id)

// if(currSlide === slides[0]){
  
//   clearInterval(autoSlidingIntervalIdRef.current)
//   autoSlidingIntervalIdRef.current = setInterval(()=>{
//     next();
//   },3000)
// }

// else if(currSlide === slides[slides.length-1]?.id){
 
//   clearInterval(autoSlidingIntervalIdRef.current)
//   autoSlidingIntervalIdRef.current = setInterval(()=>{
//     prev();
//   },3000)
// }

// },[currSlide])




// useEffect(()=>{
//   clearInterval(autoSlidingIntervalIdRef.current);
//   autoSlidingIntervalIdRef.current = setInterval(()=>{
//     next();
//   },2000)

//   setTimeout(()=>{
//     clearInterval(autoSlidingIntervalIdRef.current);
//     autoSlidingIntervalIdRef.current = setInterval(()=>{
//       prev();
//     },2000)
//   },3000*slides.length)
//   return ()=>{
//     clearInterval(autoSlidingIntervalIdRef.current);
//   }
// })
 

 




  return (
    <div className='carousel'>
      
        <div className='left-arrow'
         onClick={()=>prev()}
        >
        <ArrowLeft />
        </div>
        
     
        <div className='carousel-slides-container' >
         <div className=  "slides-track" ref={slidesContainerRef}>
          {items.map((item,index)=>{
           return <div className='carousel-slides' id={`id${index+1}`} ><img src= {item} alt='laro'></img></div>
          })}
          </div>
        </div>
      
       
   
      <div className='right-arrow'
       onClick={()=>next()}
      >
      <ArrowRight/>
      </div>
     
    </div>
  )
        }

export default Carousel
