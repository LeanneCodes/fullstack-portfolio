import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { Link } from "react-router-dom";
import './navbar.css'

const Menu = () => (
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#about'>About Me</a></p>
    <p><a href='#skills'>Skills</a></p>
    <p><a href='#experience'>Experience</a></p>
    <p><a href='#projects'>Projects</a></p>
    <p><a href='cv.pdf' target='_blank'>CV</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='navbar-container' id='navbar'>
      <div className='navbar-links'>
        <div className='navbar-link-container'>
        <h3><Link to="/#home" style={{ color: "var(--header-color)", textDecoration: "none;" }}>Junior Frontend Portfolio</Link></h3>
          <div className='navlinks'>
            <Menu />
          </div>
        </div>
      </div>
      <div className='navbar-toggle'>
      <h3><Link to="/#home" style={{ color: "var(--header-color)", textDecoration: "none;" }}>Junior Frontend Portfolio</Link></h3>
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
  )
}

export default Navbar