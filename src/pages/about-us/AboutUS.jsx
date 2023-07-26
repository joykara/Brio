import React from 'react';
import './aboutUs.css';
import { Footer, HeroHeader, Navbar } from '../../components';

const AboutUS = () => {
  return (
    <>
        <Navbar />
        <HeroHeader title={'ABOUT US'} subtitle={'OUR STORY'} description={'BrIO is a React UI Library that helps you build fast, accessible, and beautiful user interfaces for your web applications.'} />
        <div className="br-about-us">
        </div>
        <Footer />
    </>
  )
}

export default AboutUS