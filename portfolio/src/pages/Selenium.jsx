import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { Link } from "react-router-dom";
import '../containers/navbar/navbar.css'
import './selenium.css'
import Cards from '../components/cards/Cards';
import { Footer } from '../containers';

const Menu = () => (
    <>
      <p><Link to="/#home">Home</Link></p>
      <p><Link to="/#about">About Me</Link></p>
      <p><Link to="/#skills">Skills</Link></p>
      <p><Link to="/#certificates">Certicates</Link></p>
      <p><Link to="/#projects">Projects</Link></p>
      <p><a href='cv.pdf' target='_blank'>CV</a></p>
    </>
)

const Selenium = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <>
            <div className='navbar-container' id='navbar'>
                <div className='navbar-links'>
                <div className='navbar-link-container'>
                    <h3>QA Engineer Portfolio</h3>
                    <div className='navlinks'>
                    <Menu />
                    </div>
                </div>
                </div>
                <div className='navbar-toggle'>
                <h3>QA Engineer Portfolio</h3>
                {toggleMenu
                    ? <RiCloseLine size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className='navbar-menu-container'>
                    <div className='navbar-menu-container-links'>
                        <Menu />
                    </div>
                    </div>
                )}
                </div>
            </div>
            <div className='project-page'>
                <h1>Selenium Project</h1>
                <div className='project-review'></div>
            </div>
            <div>
                <h3>View Other Projects</h3>
                <div className='projects' style={{marginTop: 0, marginBottom: "2rem"}}>
                    <div className='projects-card'>
                    <Cards
                        img='#'
                        name="Project name 2"
                        tech="tech used"
                        summary="description"
                    />
                    <Link to="/jira" style={{color: 'white', display: 'flex', justifyContent: 'center', textAlign: 'center'}}>View Jira Project</Link>
                    </div>
                    <div className='projects-card'>
                    <Cards
                        img='#'
                        name="Project name 3"
                        tech="tech used"
                        summary="description"
                    />
                    <Link to="/postman" style={{color: 'white', display: 'flex', justifyContent: 'center', textAlign: 'center'}}>View Postman Project</Link>
                    </div>
                    <div className='projects-card'>
                    <Cards
                        img='#'
                        name="Project name 4"
                        tech="tech used"
                        summary="description"
                    />
                    <Link to="/appium" style={{color: 'white', display: 'flex', justifyContent: 'center', textAlign: 'center'}}>View Appium Project</Link>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Selenium