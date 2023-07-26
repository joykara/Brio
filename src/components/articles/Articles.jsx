import React from 'react';
import './articles.css';

const Articles = () => {
  return (
      <>
          <div className="br-articles-container">
                <div className="br-articles-title">
                    <h2>LATEST IN ANIMATION</h2>
                </div>
                <div className="br-articles-section">
                    <div className="br-articles">
                        <div className="br-articles-card">
                            <div className="br-articles-card-image">
                                <img src="" alt="Article img" />
                            </div>
                            <div className="br-articles-card-content">
                                <p>Date</p>
                                <h3>Article Title</h3>
                            </div>
                        </div>
                        <div className="br-articles-card">
                            <div className="br-articles-card-image">
                                <img src="" alt="Article img" />
                            </div>
                            <div className="br-articles-card-content">
                                <p>Date</p>
                                <h3>Article Title</h3>
                            </div>
                        </div>
                    </div>
                    <div className="br-articles">
                        <div className="br-articles-card">
                            <div className="br-articles-card-image">
                                <img src="" alt="Article img" />
                            </div>
                        </div>
                    </div>
                    <div className="br-articles">
                        <div className="br-articles-card">
                            <div className="br-articles-card-image">
                                <img src="" alt="Article img" />
                            </div>
                            <div className="br-articles-card-content">
                                <p>Date</p>
                                <h3>Article Title</h3>
                            </div>
                        </div>
                        <div className="br-articles-card">
                            <div className="br-articles-card-image">
                                <img src="" alt="Article img" />
                            </div>
                            <div className="br-articles-card-content">
                                <p>Date</p>
                                <h3>Article Title</h3>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
      </>
  )
}

export default Articles