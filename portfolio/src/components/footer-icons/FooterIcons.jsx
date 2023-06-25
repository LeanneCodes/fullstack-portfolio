import React from 'react'
import './footer-icons.css'

const FooterIcons = ({ icon }) => {
  return (
    <div className='footer-icon-container'>
      <div className='footer-icon'>{ icon }</div>
    </div>
  )
}

export default FooterIcons