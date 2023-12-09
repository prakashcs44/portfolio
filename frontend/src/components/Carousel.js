import React, { useEffect, useRef, useState } from 'react'
import ArrowLeft from '../icons/ArrowLeft'
import ArrowRight from '../icons/ArrowRight'



function Carousel({items}) {


 const [currItem,setCurrItem] = useState(0);

  const intervalIdRef = useRef(null);
  const timeoutIdRef = useRef(null);

 const resetInterval = ()=>{
  clearInterval(intervalIdRef.current);
  clearTimeout(timeoutIdRef.current);
  timeoutIdRef.current =setTimeout(()=>{
    intervalIdRef.current = setInterval(()=>{
      setCurrItem((prevItem)=>(prevItem+1)%items.length);
    },2000)
  },3000)
 };


 useEffect(()=>{
    
    intervalIdRef.current = setInterval(()=>{
      setCurrItem((prevItem) => (prevItem+1)%items.length);
   },2000)
   return ()=>{
    clearInterval(intervalIdRef.current);
   }
 },[])



 const next =  ()=>{
 
 
 
   setCurrItem((prevItem) => (prevItem+1)%items.length);
   resetInterval();
  
  
 }

 const prev = ()=>{
   
    let item = currItem;
    if(item==0){
        item = items.length-1;
    }
    else{
        item--;
    }
   
    setCurrItem(item);
    resetInterval();
 }

  return (
    <div className='carousel'>
        <div className='left-arrow'
        onClick={()=>prev()}
        >
        <ArrowLeft />
        </div>
        
      <div className='carousel-item' src={items[currItem]}
      
      style={{backgroundImage:`url(${items[currItem]})`}}
      
      >
       
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
