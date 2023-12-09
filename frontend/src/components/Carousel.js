import React, { useEffect, useState } from 'react'
import ArrowLeft from '../icons/ArrowLeft'
import ArrowRight from '../icons/ArrowRight'
function Carousel({item1,item2,item3,item4}) {

 const items = [item1,item2,item3];
 const [currItem,setCurrItem] = useState(0);


//  useEffect(()=>{
//    const intervalId = setInterval(next,500);
//    return ()=>{
//     clearInterval(intervalId);
//    }
//  },[])

 const next = ()=>{
  let item = currItem;
  item  = (item+1)%(items.length);
  setCurrItem(item);
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
 }

  return (
    <div className='carousel'>
        <div className='left-arrow'
        onClick={()=>next()}
        >
        <ArrowLeft />
        </div>
      <div className='carousel-item'>
        {items[currItem]}
      </div>
      <div className='right-arrow'
      onClick={()=>prev()}
      >
      <ArrowRight/>
      </div>
     
    </div>
  )
}

export default Carousel
