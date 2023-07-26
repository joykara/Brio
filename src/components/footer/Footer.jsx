import React, { useState, useEffect } from 'react';
import './footer.css';
// import FaArrowUp from 'react-icons/fa';

const Footer = () => {
    const [showBackToTop, setShowBackToTop] = useState(false);

  // Add the scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // Show the "Back to Top" button when user scrolls down 300px or more
      if (window.scrollY >= 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
      <>
          <div className="br-footer-container">
              <div className={`br-footer-nav-button ${showBackToTop ? 'visible' : ''}`}
        onClick={handleBackToTop}>
                  <p> BACK TO TOP</p>
              </div>
              <div className="br-footer-card">
                  <div className="br-footer-card-content">
                      <h3>COMPANY</h3>
                      <div className="br-footer-card-content-details">
                      <p>Awards</p>
                      <p>Branding Guidelines</p>
                      </div>
                  </div>
                  <div className="br-footer-card-content">
                      <h3>ENTERTAINMENT</h3>
                      <div className="br-footer-card-content-details">
                      <p>Brio Online Services</p>
                      <p>Branding Guidelines</p>
                      </div>
                  </div>
                  <div className="br-footer-card-content">
                      <h3>PARTNERSHIPS</h3>
                      <div className="br-footer-card-content-details">
                      <p>Academic Partners</p>
                      <p>Training Partners</p>
                      <p>Service Partners</p>
                      </div>
                  </div>
                  <div className="br-footer-card-content">
                      <h3>SUPPORT</h3>
                      <div className="br-footer-card-content-details">
                      <p>Get help</p>
                      <p>FAQs</p>
                      <p>Documentation</p>
                      <p>Issues</p>
                      <p>Forums</p>
                      </div>
                  </div>
                  <div className="br-footer-card-content">
                      <h3>CONTACT</h3>
                      <div className="br-footer-card-content-details">
                      <p>Phone Info</p>
                      <p>Email</p>
                      </div>
                  </div>
              </div>
              <div className="br-footer-copyright">
                  <p>© 2021 Brio. All rights reserved.</p>
                  <div className="br-footer-copyright-info">
                      <p>Terms of Service</p>
                      <p>Privacy Policy</p>
                  </div>
              </div>
          </div>
      </>
  )
}

export default Footer