import React from 'react'
import './cards.css'

const Cards = ({ img, name, tech, summary, link }) => {
  return (
    <div className='project-card'>
      <div className='project-image'>
        <img src={img} alt="project-image" />
      </div>
      <div className='project-content'>
        <div className='project-info'>
          <h4>{name}</h4>
          <h5>{tech}</h5>
          <p>{summary}</p>
          <button>{link}</button>
        </div>
      </div>
    </div>
  )
}

export default Cards