import React from 'react'
import './intro.css'
import { RxOpenInNewWindow } from "react-icons/rx";

const Intro = () => {
  return (
    <div className='intro-container' id='home'>
      <h1 style={{color: 'white'}}>Leanne Goldsmith</h1>
      <p style={{color: 'white'}}>I am a Junior Fullstack Engineer with experience in QA Testing</p>
      <div className='intro-links'>
        <button type='button'><a href='cv.pdf' target='_blank'>Preview CV {<RxOpenInNewWindow />}</a></button>
      </div>
    </div>
  )
}

export default Intro