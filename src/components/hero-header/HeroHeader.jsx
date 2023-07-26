import React from 'react';
import './heroHeader.css';

const HeroHeader = ({title, subtitle, description}) => {
  return (
    <>
      <div className="br-hero-header">
        <div className="br-hero-header__intro">
          <h1>{title}</h1>
        </div>
        <div className="br-hero-header__desc">
          <h2>{subtitle}</h2>
          <p>{description}</p>
        </div>
      </div>
    </>
  )
}

export default HeroHeader