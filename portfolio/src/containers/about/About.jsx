import React from 'react'
import './about.css'
import leanne from '../../assets/leanne-portfolio.png';

const About = () => {
  return (
    <div className='about-container container' id='about'>
      <div className='about-info'>
        <div className='img-style'>
          <img src={leanne} alt='Leanne' className='profile-pic'/>
        </div>
        <div className='text-pos'>
          <h1>About me</h1>
          <p className='text-style'>
          I'm transitioning my career from addressable advertising to QA engineering due to my newfound passion for ensuring software quality and user satisfaction.<br/><br/>
          My experience in addressable advertising has shown me the vital role of quality assurance in delivering seamless user experiences. The analytical and problem-solving nature of QA engineering attracts me, allowing me to utilize my attention to detail, critical thinking, and technical skills to identify and prevent issues.<br/><br/>
          I'm enthusiastic about applying my knowledge and dedication to create reliable software tests, where the final product surpass user expectations and provides a positive experience.<br/><br/>
          My current role involves coding display banners for renowned clients, equipping me with transferable skills for my next career move.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About