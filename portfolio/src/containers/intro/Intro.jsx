import React from 'react'
import './intro.css'
import { RxOpenInNewWindow } from "react-icons/rx";

const Intro = () => {
  return (
    <div className='intro-container' id='home'>
      <h1 style={{color: 'white'}}>Leanne Goldsmith</h1>
      <p style={{color: 'white'}}>
        With expertise in Figma and Greensock Animations, I am a qualified Junior Fullstack Engineer.
      </p>
      <div className='intro-links'>
        <button type='button'><a href='cv.pdf' target='_blank'>Preview CV {<RxOpenInNewWindow />}</a></button>
      </div>
    </div>
  )
}

export default Intro