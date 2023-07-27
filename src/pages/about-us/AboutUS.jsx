import React from 'react';
import './aboutUs.css';
import { Footer, HeroHeader, Navbar } from '../../components';

const AboutUS = () => {
  return (
    <>
        <Navbar />
        <HeroHeader title={'ABOUT US'} subtitle={'OUR STORY'} description={'BrIO is a React UI Library that helps you build fast, accessible, and beautiful user interfaces for your web applications.'} />
        <div className="br-about-us">
          <div className="br-about-sections">
            <div className="br-about-section">
              <div className="br-about-section-title">
                <h1>OUR VISION</h1>
              </div>
              <div className="br-about-section-description">
                <p>"To provide the best possible quality of life for our clients and community by
                  delivering the highest standard of professional care."</p>
                  <span></span>
              </div>
            </div>
            <div className="br-about-section">
              <div className="br-about-section-title">
                <h1>OUR MISSION</h1>
              </div>
              <div className="br-about-section-description">
                <p>"To provide the best possible quality of life for our clients and community by
                  delivering the highest standard of professional care."</p>
                  <span></span>
              </div>
            </div>
            <div className="br-about-section">
              <div className="br-about-section-title">
                <h1>OUR VALUES</h1>
              </div>
              <div className="br-about-section-description">
                <p>"To provide the best possible quality of life for our clients and community by
                  delivering the highest standard of professional care."</p>
                  <span></span>
              </div>
            </div>
          </div>
        </div>
        <Footer />
    </>
  )
}

export default AboutUS