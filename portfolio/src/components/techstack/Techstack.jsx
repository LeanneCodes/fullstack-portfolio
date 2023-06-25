import React from 'react'

import './techstack.css'

const TechStack = ({ image, name }) => {
  return (
    <div className='tech-container'>
      <div className='icon'>{ image }</div>
      <p>{ name }</p>
    </div>
  )
}

export default TechStack