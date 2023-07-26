import React, { useState } from 'react';
import './navbar.css';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';

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
                        <li><a href="/">ABOUT US</a></li>
                        <li><a href="/">OUR WORK</a></li>
                        <li><a href="/">OUR PROCESS</a></li>
                        <li><a href="/">SERVICES</a></li>
                        <li><a href="/">CONTACT US</a></li>
                        <li><a href="/">MARKET PLACE</a></li>
                        <li><a href="/">BLOG</a></li>
                    </ul>
                </nav>
                <div className={`br-navbar-toggle ${toggleMenu ? 'active' : ''}`} onClick={handleToggle}>
                    {toggleMenu ? <RiCloseLine size={25} color='black'/> : <RiMenuLine size={25} color='black'/>}
                    {toggleMenu && (
                    <nav className="br-navbar-menu-mobile">
                        <ul>
                            <li><a href="/">ABOUT US</a></li>
                            <li><a href="/">OUR WORK</a></li>
                            <li><a href="/">OUR PROCESS</a></li>
                            <li><a href="/">SERVICES</a></li>
                            <li><a href="/">CONTACT US</a></li>
                            <li><a href="/">MARKET PLACE</a></li>
                            <li><a href="/">BLOG</a></li>
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