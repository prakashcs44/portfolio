import React, { useState ,useEffect} from 'react'




const f = (str)=>{

  let arr = [];
  
  let temp = str;
  for(let i  = 0;i<str.length;i++){
      arr.push(temp+'|')
     temp   = temp.slice(0,-1);
  }
  
  arr.push("|")
  
  return arr;
  
  }
  
  
  


function SkillsDynamicDisplay() {
    
  let intervalId;

   const nameParts = f("Full stack developer");
   let index = 0;
   let dir = 1;
    const [dynamicName,setDynamicName] = useState("")
  

  const changeNameDynamically = ()=>{
     setDynamicName(nameParts[index])
     if(index===nameParts.length-1){
        dir = -1;
     
     }
     if(index===0){
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


  return (
    <div className='dynamic-name-display-container'>

      <h3>HI I'M PRAKASH,A...</h3>
      <h1>{dynamicName}</h1>
    </div>
  )
}

export default SkillsDynamicDisplay
