import React from 'react';
import './services.css';
import { Footer, HeroHeader, Navbar } from '../../components';

const Services = () => {
  return (
    <>
        <Navbar />
        <HeroHeader title={'SERVICES'} subtitle={'SERVICES THAT WE OFFER:'} description={'BrIO is a React UI Library that helps you build fast, accessible, and beautiful user interfaces for your web applications.'} />
        <div className="br-our-services">
            <h3>THESE ARE SOME OF OUR SERVICES:</h3>
            <div className="br-our-services__container">
                <div className="br-our-services__container__item">
                    <h4>PRE-PRODUCTION</h4>
                    <ul className="br-our-services__item-list">
                        <li>Script</li>
                        <li>Storyboard</li>
                        <li>Animatic</li>
                        <li>2D Environment Designs</li>
                        <li>2D Prop Designs</li>
                        <li>2D Character Designs</li>
                        <li>Color Script/Clothes</li>
                    </ul>
                </div>
                <div className="br-our-services__container__item">
                    <h4>PRODUCTION</h4>
                    <ul className="br-our-services__item-list">
                        <li>Modelling</li>
                        <li>UV Mapping</li>
                        <li>Texturing</li>
                        <li>Rigging/ Set Up</li>
                        <li>Animation Preparation</li>
                        <li>Character Animation</li>
                        <li>Animation</li>
                        <li>Lip Syncing</li>
                        <li>Set Dressing</li>
                        <li>Crowd Creation</li>
                        <li>VFX</li>
                        <li>Lighting</li>
                        <li>Rendering</li>
                        <li>Compositing</li>
                        <li>Editing</li>
                        <li>2D VFX</li>
                        <li>Motion Graphics</li>
                        <li>Color Correction</li>
                        <li>Sound</li>
                    </ul>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Services