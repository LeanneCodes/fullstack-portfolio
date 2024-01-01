import React from 'react'
import './intro.css'
import { RxOpenInNewWindow } from "react-icons/rx";

const Intro = () => {
  return (
    <div className='intro-container' id='home'>
      <h1 style={{color: 'white'}}>Leanne Goldsmith</h1>
      <p style={{color: 'white'}}>
      I hold a Merit Diploma as a certified Fullstack Engineer, with a profound passion for Frontend development.
      </p>
      <div className='intro-links'>
        <button type='button'><a href='https://docs.google.com/document/d/1Nt3uCrIML4-v-uIG6yciaNUGDrvdKN2kt5WZR9tNfLA/edit?usp=sharing' target='_blank'>Preview CV {<RxOpenInNewWindow />}</a></button>
      </div>
    </div>
  )
}

export default Intro