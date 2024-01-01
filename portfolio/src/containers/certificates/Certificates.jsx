import React from 'react'
import './certificates.css'
import codeinst from '../../assets/ci-logo.png'
import linkedin from '../../assets/linkedin-logo.png'
import codecademy from '../../assets/codecademy-logo.png'
import edx from '../../assets/edx-logo.png';
import wavemaker from '../../assets/wavemaker-logo.png';

const Certificates = () => {
  return (
    <div className='cert-container container' id='experience'>
      <h1>Experience</h1>
      <div className='cert-cards'>
        <div className='cert-card'>
          <div className='img-pos'>
            <img src={wavemaker} />
          </div>
          <div className='cert-info-pos'>
            <h3>Wavemaker</h3>
            <p>
            In my current position, I create display banner ads for esteemed clients. This entails translating Figma and Photoshop designs from creative agencies into live ads, effectively showcasing them to the target audiences of our clients.
            <br />
            <br />
            I have two years experience in using HTML, CSS, JavaScript and Greensock in my current role and I'm highly proficient in these techstacks.
            </p>
            <button type='button'><a href='#' target='_blank'>View Examples</a></button>
          </div>
        </div>
        <div className='cert-card'>
          <div className='img-pos'>
            <img src={edx} />
          </div>
          <div className='cert-info-pos'>
            <h3>Edx</h3>
            <p>
            I immersed myself in a frontend developer bootcamp, delving into HTML, CSS, JavaScript, jQuery, and APIs. Engaged in collaborative group projects, I honed my skills for real-world application in web development.
            <br />
            <br />
            Achieving a Grade A for this bootcamp, I've leveraged this experience and knowledge to build intricate projects, while following best practices. A selection of these projects are below.
            </p>
            <button type='button'><a href='/src/assets/Software-Testing-Certificate.pdf' target='_blank'>View Certificate</a></button>
          </div>
        </div>
        <div className='cert-card'>
          <div className='img-pos'>
            <img src={codeinst} />
          </div>
          <div className='cert-info-pos'>
            <h3>Code Institute</h3>
            <p>I completed an intensive year-long bootcamp program that encompassed training in HTML, CSS, JavaScript, and Python.<br/><br/>Acquiring proficiency in these languages has proven invaluable in my current position, where I utilise frontend technologies to craft visually appealing display banners for clients.<br/><br/>Throughout the duration of the course, I successfully developed five projects, resulting in a Merit grade.</p>
            <button type='button'><a href='https://www.credential.net/abe70729-0419-4049-a752-62b032d231eb#gs.08qmqt' target='_blank'>View Certificate</a></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Certificates