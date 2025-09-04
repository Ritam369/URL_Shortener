import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <i className="fas fa-link"></i>
        <h1>URL Shortener</h1>
      </div>
      <p className="subtitle">Transform long URLs into short, powerful links with QR codes and analytics</p>
      <div className="header-stats">
        <div className="stat-badge">
          <i className="fas fa-bolt"></i>
          <span>Instant Generation</span>
        </div>
        <div className="stat-badge">
          <i className="fas fa-shield-alt"></i>
          <span>Secure & Reliable</span>
        </div>
        <div className="stat-badge">
          <i className="fas fa-mobile-alt"></i>
          <span>Mobile Friendly</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
