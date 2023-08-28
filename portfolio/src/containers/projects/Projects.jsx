import React from 'react'
import './projects.css'
import Cards from '../../components/cards/Cards'
import { Link } from "react-router-dom";
import noImage from "../../assets/no-image.jpeg"
import Oyster from "../../assets/oyster-and-beyond-project-cover.png"

const Projects = () => {
  return (
    <div className='projects-container container' id="projects">
      <h1 style={{color: 'white'}}>My Projects</h1>
      <div className='projects'>
        <div className='projects-card'>
          <Cards
            img={ Oyster }
            name="Oyster & Beyond"
            tech="HTML, ReactJs, NextJs, Tailwind, JavaScript, Hygraph CMS"
            summary="A travel blog that uses a carousel to showcase my feature posts. A side category bar that groups my posts by destination, and an option for users to leave comments."
          />
          <Link to="/blog" style={{color: 'white', display: 'flex', justifyContent: 'center', textAlign: 'center'}}>View Blog Project</Link>
        </div>
        <div className='projects-card'>
          <Cards
            img={ noImage }
            name="Spanish Language Quiz"
            tech="HTML, CSS, JavaScript"
            summary="A beginner quiz aimed for kids to understand more spanish vocabulary from popular topics. There are 8 categories to be quizzed on and an opportunity to save your score on a highscore list."
          />
          <Link to="/booking" style={{color: 'white', display: 'flex', justifyContent: 'center', textAlign: 'center'}}>View Quiz Project</Link>
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