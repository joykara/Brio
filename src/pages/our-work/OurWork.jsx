import React from 'react';
import './ourWork.css';
import { Footer, HeroHeader, Navbar } from '../../components';

const OurWork = () => {
  return (
      <>
          <Navbar />
          <HeroHeader title={'OUR WORK'} subtitle={'OUR WORK'} description={'BrIO is a React UI Library that helps you build fast, accessible, and beautiful user interfaces for your web applications.'} />
          <div className="br-our-work-container">
              <div className="br-our-work">
                  <div className="br-our-work__image">
                      <img src="" alt="Our Work" />
                  </div>
                  <div className="br-our-work__content">
                      <h3>Our Work</h3>
                      <p>BrIO is a React UI Library that helps you build fast, accessible, and beautiful user interfaces for your web applications.</p>
                  </div>
              </div>
              <div className="br-our-work">
                  <div className="br-our-work__image">
                      <img src="" alt="Our Work" />
                  </div>
                  <div className="br-our-work__content">
                      <h3>Our Work</h3>
                      <p>BrIO is a React UI Library that helps you build fast, accessible, and beautiful user interfaces for your web applications.</p>
                  </div>
              </div>
              <div className="br-our-work">
                  <div className="br-our-work__image">
                      <img src="" alt="Our Work" />
                  </div>
                  <div className="br-our-work__content">
                      <h3>Our Work</h3>
                      <p>BrIO is a React UI Library that helps you build fast, accessible, and beautiful user interfaces for your web applications.</p>
                  </div>
              </div>
              <div className="br-our-work">
                  <div className="br-our-work__image">
                      <img src="" alt="Our Work" />
                  </div>
                  <div className="br-our-work__content">
                      <h3>Our Work</h3>
                      <p>BrIO is a React UI Library that helps you build fast, accessible, and beautiful user interfaces for your web applications.</p>
                  </div>
              </div>
          </div>
          <Footer />
      </>
  )
}

export default OurWork