import React from 'react'
import './projects.css'
import Cards from '../../components/cards/Cards'
import { Link } from "react-router-dom";
import noImage from "../../assets/no-image.jpeg"
import Oyster from "../../assets/oyster-and-beyond-project-cover.png"
import VaultKey from '../../assets/vaultkey-project-cover.png';

const Projects = () => {
  return (
    <div className='projects-container container' id="projects">
      <h1 style={{color: 'white'}}>My Projects</h1>
      <div className='projects'>
        <div className='projects-card'>
          <Cards
            img={ Oyster }
            name="Oyster & Beyond Blog"
            tech="HTML, NextJs, Tailwind, JavaScript, Hygraph CMS"
            summary="A travel blog that showcases a variety of destinations and an option for users to leave comments."
          />
          <div className='project-link'>
            <a href="https://oyster-and-beyond-blog.vercel.app/" target="_blank">View Project</a>
            <a href="https://github.com/LeanneCodes/oyster-and-beyond-blog" target="_blank">View GitHub</a>
          </div>
        </div>
        <div className='projects-card'>
          <Cards
            img={ VaultKey }
            name="VaultKey Password Generator"
            tech="HTML, CSS, JavaScript"
            summary="A password generator that intakes user input and forms a password between 8 and 128 characters."
          />
          <div className='project-link'>
            <a href="https://leannecodes.github.io/vault-key-generator/" target="_blank">View Project</a>
            <a href="https://github.com/LeanneCodes/vault-key-generator" target="_blank">View GitHub</a>
          </div>
        </div>
        <div className='projects-card'>
          <Cards
            img={ noImage }
            name="Spellbound Book API"
            tech="HTML, CSS, ReactJs, NodeJs, Bootstrap"
            summary="A website that displays the top selling books and authors using the New York Times API, with the option to favourite and unfavourite books."
          />
          <div className='project-link'>
            <a href="#" target="_blank">View Project</a>
            <a href="#" target="_blank">View GitHub</a>
          </div>
        </div>
        <div className='projects-card'>
          <Cards
            img={ noImage }
            name="Project name 4"
            tech="tech used"
            summary="description"
          />
          <div className='project-link'>
            <a href="#" target="_blank">View Project</a>
            <a href="#" target="_blank">View GitHub</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects