import React from 'react'
import './footer.css'
import FooterIcons from '../../components/footer-icons/FooterIcons';
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer'>
        <h3>Leanne Goldsmith</h3>
        <h4>Junior Frontend Developer</h4>
        <div className='ext-link'>
          <a href="https://github.com/LeanneCodes" target='_blank'><FooterIcons icon={ <SiGithub/>}/></a>
          <a href="https://www.linkedin.com/in/leanne-goldsmith-98b965a5/" target='_blank'><FooterIcons icon={ <SiLinkedin/>}/></a>
        </div>
      </div>
    </div>
  )
}

export default Footer