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
          <h1>About Me</h1>
          <p className='text-style'>
          During my career, I specialised in Addressable Advertising, building display ad banners for clients such as, Eurostar, Audible and Legoland. I discovered that I love transforming Figma and Photoshop designs into live ads using HTML, CSS, JavaScript and Greensock.
          <br/>
          <br/>
          Now, I'm eager to transition into a full-time Frontend Developer role, collaborating with dedicated professionals and continuously learning and growing in this exciting tech world. I'm ready to bring my skills to innovative projects and stay ahead in this ever-evolving industry.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About