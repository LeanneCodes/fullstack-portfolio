import React from 'react'
import './projects.css'
import Cards from '../../components/cards/Cards'
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className='projects-container container' id="projects">
      <h1 style={{color: 'white'}}>My Projects</h1>
      <div className='projects'>
        <div className='projects-card'>
          <Cards
            img='#'
            name="Project name 1"
            tech="tech used"
            summary="description"
          />
          <Link to="/selenium" style={{display: 'flex', justifyContent: 'center', textAlign: 'center'}}>View Selenium Project</Link>
        </div>
        <div className='projects-card'>
          <Cards
            img='#'
            name="Project name 2"
            tech="tech used"
            summary="description"
          />
          <Link to="/jira" style={{display: 'flex', justifyContent: 'center', textAlign: 'center'}}>View Jira Project</Link>
        </div>
        <div className='projects-card'>
          <Cards
            img='#'
            name="Project name 3"
            tech="tech used"
            summary="description"
          />
          <Link to="/postman" style={{display: 'flex', justifyContent: 'center', textAlign: 'center'}}>View Postman Project</Link>
        </div>
        <div className='projects-card'>
          <Cards
            img='#'
            name="Project name 4"
            tech="tech used"
            summary="description"
          />
          <Link to="/appium" style={{display: 'flex', justifyContent: 'center', textAlign: 'center'}}>View Appium Project</Link>
        </div>
      </div>
    </div>
  )
}

export default Projects