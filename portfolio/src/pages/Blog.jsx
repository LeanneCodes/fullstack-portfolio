import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { Link } from "react-router-dom";
import '../containers/navbar/navbar.css'
import './Blog.css'
import Cards from '../components/cards/Cards';
import { Footer } from '../containers';
import ScrollToTop from './ScrollToTop';
import noImage from '../assets/no-image.jpeg';

const Menu = () => (
    <>
      <p><Link to="/#home">Back to Home</Link></p>
    </>
)

const Blog = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <>
            <ScrollToTop />
            <div className='navbar-container' id='navbar'>
                <div className='navbar-links'>
                <div className='navbar-link-container'>
                <h3><Link to="/#home" style={{ color: "var(--header-color)", textDecoration: "none;" }}>Fullstack Engineer Portfolio</Link></h3>
                    <div className='navlinks'>
                    <Menu />
                    </div>
                </div>
                </div>
                <div className='navbar-toggle'>
                <h3><Link to="/#home" style={{ color: "var(--header-color)", textDecoration: "none;" }}>Fullstack Engineer Portfolio</Link></h3>
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
                <h1>Oyster & Beyond Blog</h1>
                <div className='project-review'></div>
            </div>
            <div>
                <h3>View Other Projects</h3>
                <div className='projects' style={{marginTop: 0, marginBottom: "2rem"}}>
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

            <Footer />
        </>
    )
}

export default Blog;