import React, { useState } from 'react';
import './navbar.css';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const handleToggle = () => {
        setToggleMenu(!toggleMenu)
    }

  return (
    <>
        <div className="br-navbar-container">
            <div className="br-navbar">
                <div className="br-navbar-logo">
                      <img src="" alt="Brio Logo" />
                      <p>Brio Ent.</p>
                </div>
                <nav className="br-navbar-menu">
                    <ul>
                        <li><Link to={'/about-us'}>ABOUT US</Link></li>
                        <li><Link to={'/our-work'}>OUR WORK</Link></li>
                        <li><Link to={'/'}>OUR PROCESS</Link></li>
                        <li><Link to={'/'}>SERVICES</Link></li>
                        <li><Link to={'/'}>CONTACT US</Link></li>
                        <li><Link to={'/'}>MARKET PLACE</Link></li>
                        <li><Link to={'/'}>BLOG</Link></li>
                    </ul>
                </nav>
                <div className={`br-navbar-toggle ${toggleMenu ? 'active' : ''}`} onClick={handleToggle}>
                    {toggleMenu ? <RiCloseLine size={25} color='black'/> : <RiMenuLine size={25} color='black'/>}
                    {toggleMenu && (
                    <nav className="br-navbar-menu-mobile">
                        <ul>
                            <li><Link to={'/about-us'}>ABOUT US</Link></li>
                            <li><Link to={'/our-work'}>OUR WORK</Link></li>
                            <li><Link to={'/'}>OUR PROCESS</Link></li>
                            <li><Link to={'/'}>SERVICES</Link></li>
                            <li><Link to={'/'}>CONTACT US</Link></li>
                            <li><Link to={'/'}>MARKET PLACE</Link></li>
                            <li><Link to={'/'}>BLOG</Link></li>
                        </ul>
                    </nav>
                    )}
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar