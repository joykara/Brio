import React from 'react';
import './ourProcess.css';
import { Footer, HeroHeader, Navbar } from '../../components';

const OurProcess = () => {
  return (
    <>
        <Navbar />
        <HeroHeader title={'OUR PROCESS'} subtitle={'OUR PROCESS'} description={'BrIO is a React UI Library that helps you build fast, accessible, and beautiful user interfaces for your web applications.'} />
        <div className="br-our-process">
        </div>
        <Footer />
    </>
  )
}

export default OurProcess