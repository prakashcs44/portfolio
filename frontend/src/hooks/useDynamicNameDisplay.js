import { useEffect,useState } from "react";
import wordSeparator from "../utility/wordSeparator";




const useDynamicNameDisplay = (displayContent)=>{


    let intervalId;

    const nameParts = wordSeparator(displayContent);
    let index = 0;
    let dir = 1;
    const [dynamicName,setDynamicName] = useState("")
   
 



   const changeNameDynamically = ()=>{
      setDynamicName(nameParts[index])
      if(index===nameParts.length-1){
         dir = -1;
      
      }
      else if(index===0){
         dir = 1;
         clearInterval(intervalId);
         setTimeout(()=>{
          intervalId = setInterval(changeNameDynamically,300);
         },2000)
      }
      index = index+dir; 
   }
 
 
     useEffect(()=>{
        intervalId = setInterval(changeNameDynamically,300);
 
       return ()=>{
         clearInterval(intervalId)
       }
     },[])
 
  return dynamicName;

}


export default useDynamicNameDisplay;