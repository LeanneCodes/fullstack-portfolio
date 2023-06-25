import React from 'react'
import './intro.css'
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";

const Intro = () => {
  return (
    <div className='intro-container' id='home'>
      <h1 style={{color: 'white'}}>Leanne Goldsmith</h1>
      <p style={{color: 'white'}}>I am a Junior Fullstack Engineer with experience in QA Testing</p>
      <div className='intro-links'>
        <button type='button'><a href='cv.pdf' target='_blank'>Preview CV</a></button>
      </div>
    </div>
  )
}

export default Intro