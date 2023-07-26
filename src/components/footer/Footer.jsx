import React from 'react';
import './footer.css';
// import FaArrowUp from 'react-icons/fa';

const Footer = () => {
  return (
      <>
          <div className="br-footer-container">
              <div className="br-footer-nav-button">
                  <p> BACK TO TOP</p>
              </div>
              <div className="br-footer-card">
                  <div className="br-footer-card-content">
                      <h3>COMPANY</h3>
                      <p>Awards</p>
                      <p>Branding Guidelines</p>
                  </div>
                  <div className="br-footer-card-content">
                      <h3>ENTERTAINMENT</h3>
                      <p>Brio Online Services</p>
                      <p>Branding Guidelines</p>
                  </div>
                  <div className="br-footer-card-content">
                      <h3>PARTNERSHIPS</h3>
                      <p>Academic Partners</p>
                      <p>Training Partners</p>
                      <p>Service Partners</p>
                  </div>
                  <div className="br-footer-card-content">
                      <h3>SUPPORT</h3>
                      <p>Get help</p>
                      <p>FAQs</p>
                      <p>Documentation</p>
                      <p>Issues</p>
                      <p>Forums</p>
                      <p>Ask a question</p>
                  </div>
                  <div className="br-footer-card-content">
                      <h3>CONTACT</h3>
                      <p>Phone Info</p>
                      <p>Email</p>
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