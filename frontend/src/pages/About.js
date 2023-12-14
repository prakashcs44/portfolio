import React from 'react'
import AboutMe from '../components/AboutMe'
import img from "../pictures/pic4.jpg"
import SkillsPercentageBar from "../components/SkillsPercentageBar"
import JsIcon from "../icons/JsIcon"
function About() {
  return (
    <div className='about-page'>
      <div className='profile-img'>
      <img src={img} alt='profile-img'>
        </img>
      </div>
      <div className='profession'>
        <h2>Full stack developer/designer</h2>
      </div>
       <AboutMe/>
       <div className='skills-section'>
        
        <h2>SKILLS</h2>

        <div className='skills'>
          <div className='skills-item'>
            <div className='skill-detail'>
            <p className='skill-name'>HTML</p>
           <p className='percentage'>60%</p>
            </div>
            <SkillsPercentageBar percentage={60}/>
        </div>
        <div className='skills-item'>
            <div className='skill-detail'>
            <p className='skill-name'>JS</p>
           <p className='percentage'>70%</p>
            </div>
            <SkillsPercentageBar percentage={70}/>
        </div>
        <div className='skills-item'>
            <div className='skill-detail'>
            <p className='skill-name'>CSS</p>
           <p className='percentage'>50%</p>
            </div>
            <SkillsPercentageBar percentage={50}/>
        </div>

        <div className='skills-item'>
            <div className='skill-detail'>
            <p className='skill-name'>REACT</p>
           <p className='percentage'>48%</p>
            </div>
            <SkillsPercentageBar percentage={48}/>
        </div>
        <div className='skills-item'>
            <div className='skill-detail'>
            <p className='skill-name'>EXPRESS</p>
           <p className='percentage'>40%</p>
            </div>
            <SkillsPercentageBar percentage={40}/>
            <div className='skills-item'>
            <div className='skill-detail'>
            <p className='skill-name'>C/C++</p>
           <p className='percentage'>63%</p>
            </div>
            <SkillsPercentageBar percentage={63}/>
        </div>
        </div>
        </div>
       </div>
       <div className='interests'>


       <h2>INTERESTS</h2>

       
       <div className='interest-item'>
        <div className='interest-icon'>
          icon
        </div>
        <p>web development</p>
        
       </div>

       <div className='interest-item'>
        <div className='interest-icon'>
          icon
        </div>
        <p>songs</p>
        
       </div>
       
       <div className='interest-item'>
        <div className='interest-icon'>
          icon
        </div>
        <p>movies</p>
        
       </div>
        
      
       <div className='interest-item'>
        <div className='interest-icon'>
          icon
        </div>
        <p>exercise</p>
        
       </div>



       </div>
    </div>
  )
}

export default About
