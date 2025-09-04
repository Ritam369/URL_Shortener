import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
      </div>
      
      <div className="footer-links">
        <a 
          href="https://github.com/Ritam369/URL_Shortener" 
          target="_blank" 
          rel="noopener noreferrer"
          title="View source code on GitHub"
        >
          <i className="fab fa-github"></i>
          Source Code
        </a>
        <a 
          href="https://github.com/Ritam369" 
          target="_blank" 
          rel="noopener noreferrer"
          title="Follow me on GitHub"
        >
          <i className="fab fa-github"></i>
          @Ritam369
        </a>
      </div>

      <p>
        &copy; {currentYear} URL Shortener. Made with ❤️ by{' '}
        <a 
          href="https://github.com/Ritam369" 
          style={{
            textDecoration: 'none', 
            color: 'inherit', 
            fontWeight: 'bold'
          }} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Ritam Saha
        </a>
      </p>
    </footer>
  );
};

export default Footer;
