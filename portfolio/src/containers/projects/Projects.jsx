import React from 'react'
import './projects.css'
import Cards from '../../components/cards/Cards'
import { Link } from "react-router-dom";
import noImage from "../../assets/no-image.jpeg"

const Projects = () => {
  return (
    <div className='projects-container container' id="projects">
      <h1 style={{color: 'white'}}>My Projects</h1>
      <div className='projects'>
        <div className='projects-card'>
          <Cards
            img={ noImage }
            name="Oyster & Beyond"
            tech="tech used"
            summary="description"
          />
          <Link to="/blog" style={{color: 'white', display: 'flex', justifyContent: 'center', textAlign: 'center'}}>View Blog Project</Link>
        </div>
        <div className='projects-card'>
          <Cards
            img={ noImage }
            name="The Coil Lounge"
            tech="tech used"
            summary="description"
          />
          <Link to="/booking" style={{color: 'white', display: 'flex', justifyContent: 'center', textAlign: 'center'}}>View Booking Project</Link>
        </div>
        <div className='projects-card'>
          <Cards
            img={ noImage }
            name="Spellbound"
            tech="tech used"
            summary="description"
          />
          <Link to="/store" style={{color: 'white', display: 'flex', justifyContent: 'center', textAlign: 'center'}}>View eCommerce Project</Link>
        </div>
        <div className='projects-card'>
          <Cards
            img={ noImage }
            name="Project name 4"
            tech="tech used"
            summary="description"
          />
          <Link to="/quiz" style={{color: 'white', display: 'flex', justifyContent: 'center', textAlign: 'center'}}>View Quiz Project</Link>
        </div>
      </div>
    </div>
  )
}

export default Projects