import React from 'react'
import './certificates.css'
import codeinst from '../../assets/ci-logo.png'
import linkedin from '../../assets/linkedin-logo.png'
import codecademy from '../../assets/codecademy-logo.png'

const Certificates = () => {
  return (
    <div className='cert-container container' id='certificates'>
      <h1>Certificates</h1>
      <div className='cert-cards'>
        <div className='cert-card'>
          <div className='img-pos'>
            <img src={codeinst} />
          </div>
          <div className='cert-info-pos'>
            <h3>Code Institute</h3>
            <p>I completed an intensive year-long bootcamp program that encompassed training in HTML, CSS, JavaScript, and Python.<br/><br/>Acquiring proficiency in these languages has proven invaluable in my current position, where I utilize frontend technologies to craft visually appealing display banners for clients.<br/><br/>Throughout the duration of the course, I successfully developed five projects, resulting in a Merit grade.</p>
            <button type='button'><a href='https://www.credential.net/abe70729-0419-4049-a752-62b032d231eb#gs.08qmqt' target='_blank'>View Certificate</a></button>
          </div>
        </div>
        <div className='cert-card'>
          <div className='img-pos'>
            <img src={codecademy} />
          </div>
          <div className='cert-info-pos'>
            <h3>CodeCademy</h3>
            <p>To develop my knowledge and practice my fullstack skills. I enrolled in this 8 month course to be more confident in both front and back end.</p>
            <button type='button'><a href='#' target='_blank'>View Certificate</a></button>
          </div>
        </div>
        <div className='cert-card'>
          <div className='img-pos'>
            <img src={linkedin} />
          </div>
          <div className='cert-info-pos'>
            <h3>LinkedIn</h3>
            <p>In order to grasp the basics of QA testing, I enrolled in multiple courses to enhance my understanding and expand my expertise.<br/><br/>After successfully finishing the coursework, I embarked on creating my own projects as a means of applying the knowledge I had gained.<br/><br/>See my QA testing projects below.</p>
            <button type='button'><a href='/src/assets/Software-Testing-Certificate.pdf' target='_blank'>View Certificate</a></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Certificates