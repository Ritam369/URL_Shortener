import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="features">
        <div className="feature">
          <i className="fas fa-bolt"></i>
          <span>Lightning Fast</span>
        </div>
        <div className="feature">
          <i className="fas fa-qrcode"></i>
          <span>QR Code Generation</span>
        </div>
        <div className="feature">
          <i className="fas fa-edit"></i>
          <span>Custom Aliases</span>
        </div>
        <div className="feature">
          <i className="fas fa-chart-line"></i>
          <span>Click Analytics</span>
        </div>
      </div>
      <p>&copy; 2025 URL Shortener. Made with ❤️</p>
    </footer>
  );
};

export default Footer;
