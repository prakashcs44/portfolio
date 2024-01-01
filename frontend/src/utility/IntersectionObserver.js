import { useEffect } from "react";
export default function upsideLoading(element) {

    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
         const target = entry.target;
          if(entry.isIntersecting&&target.classList.contains("animating-upward-loading")){
            target.classList.toggle("show-animation-upward-loading");
            target.classList.remove("animating-upward-loading");
          }
        })
      },{threshold:0})
      
      
    
         
          observer.observe(element)
          return observer;
      
      

}


