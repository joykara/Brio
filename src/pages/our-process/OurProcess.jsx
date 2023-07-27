import React from 'react';
import './ourProcess.css';
import { Footer, HeroHeader, Navbar } from '../../components';

const OurProcess = () => {
  return (
    <>
        <Navbar />
        <HeroHeader title={'OUR PROCESS'} subtitle={'OUR PROCESS'} description={'BrIO is a React UI Library that helps you build fast, accessible, and beautiful user interfaces for your web applications.'} />
        <div className="br-our-process">
          <div className="br-our-process-sections">
            <div className="br-process-section">
              <div className="br-process-section-title">
                <h3>PROCESS</h3>
              </div>
              <div className="br-process-section-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet viverra nulla. Donec bibendum scelerisque ex, a condimentum augue mollis eget. In mattis turpis nisl, in fringilla tortor pellentesque a.</p>
                  <span></span>
              </div>
            </div>
            <div className="br-process-section">
              <div className="br-process-section-title">
                <h3>PROCESS</h3>
              </div>
              <div className="br-process-section-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet viverra nulla. Donec bibendum scelerisque ex, a condimentum augue mollis eget. In mattis turpis nisl, in fringilla tortor pellentesque a.</p>
                  <span></span>
              </div>
            </div>
            <div className="br-process-section">
              <div className="br-process-section-title">
                <h3>PROCESS</h3>
              </div>
              <div className="br-process-section-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet viverra nulla. Donec bibendum scelerisque ex, a condimentum augue mollis eget. In mattis turpis nisl, in fringilla tortor pellentesque a.</p>
                  <span></span>
              </div>
            </div>
          </div>
        </div>
        <Footer />
    </>
  )
}

export default OurProcess