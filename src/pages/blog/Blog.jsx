import React from 'react';
import './blog.css';
import { Footer, HeroHeader, Navbar } from '../../components';

const Blog = () => {
  return (
    <>
        <Navbar />
        <HeroHeader title={'BLOG'} subtitle={'ANIMATION WORLD BLOGS'} description={'BrIO is a React UI Library that helps you build fast, accessible, and beautiful user interfaces for your web applications.'} />
          <div className="br-blog-container">
            <div className="br-blog-section scale-up">
                <div className="br-blog-section-image">
                    <img src="" alt="blog" />
                </div>
                <div className="br-blog-section-description">
                    <h1>BLOG</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eros odio, tempor quis sollicitudin non, tempus ut quam. Nulla facilisi. Aliquam et eleifend magna, vel luctus augue.</p>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Blog