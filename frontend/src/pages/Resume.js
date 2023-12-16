import React from 'react'
import pdf from "../files/resume.pdf"
function Resume() {

  
  return (
    <div className='resume-container' >
     <object data={pdf} width={800} height={800} className='resume'>

     </object>
    </div>
  )
}

export default Resume
