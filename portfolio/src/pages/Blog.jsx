import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { Link } from "react-router-dom";
import '../containers/navbar/navbar.css'
import './Blog.css'
import Cards from '../components/cards/Cards';
import { Footer } from '../containers';
import ScrollToTop from './ScrollToTop';
import noImage from '../assets/no-image.jpeg';
import mockup from '../assets/oyster-mockup.jpg';

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
                <div className='project-review'>
                    <div>
                        <img src={ mockup } alt="oyster and beyond device mockup" style={{width: '50%', display:'flex', margin:'auto'}}/>
                    </div>
                    <div>
                        <p style={{marginBottom:'3rem'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum aliquam possimus ut culpa odit soluta reiciendis odio officia sapiente! Maxime facere consequatur omnis perspiciatis velit odit nam, vitae voluptatem eveniet!</p>
                        <div className='project-detail'>
                            <img src={ noImage } alt="no image available" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nulla dolorem vel perferendis repellendus optio, veritatis et. Nihil voluptatibus ut veritatis quidem praesentium soluta dolorum consequatur aliquam cumque perspiciatis! Neque.</p>
                        </div>
                        <div className='project-detail reverse'>
                            <img src={ noImage } alt="no image available" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nulla dolorem vel perferendis repellendus optio, veritatis et. Nihil voluptatibus ut veritatis quidem praesentium soluta dolorum consequatur aliquam cumque perspiciatis! Neque.</p>
                        </div>
                        <div className='project-detail'>
                            <img src={ noImage } alt="no image available" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nulla dolorem vel perferendis repellendus optio, veritatis et. Nihil voluptatibus ut veritatis quidem praesentium soluta dolorum consequatur aliquam cumque perspiciatis! Neque.</p>
                        </div>
                        <div className='project-detail reverse'>
                            <img src={ noImage } alt="no image available" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nulla dolorem vel perferendis repellendus optio, veritatis et. Nihil voluptatibus ut veritatis quidem praesentium soluta dolorum consequatur aliquam cumque perspiciatis! Neque.</p>
                        </div>
                        <div className='project-links'>
                            <button type='button'><a href='https://github.com/LeanneCodes/oyster-and-beyond-blog/tree/main' target='_blank'>GitHub</a></button>
                            <button type='button'><a href='https://oyster-and-beyond-blog-57i61jxfb-leannecodes.vercel.app/' target='_blank'>Live Project</a></button>
                        </div>
                    </div>
                </div>
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