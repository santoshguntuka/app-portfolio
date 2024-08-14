import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Santosh Guntuka. All rights reserved.</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/santoshguntuka" target="_blank" rel="noopener noreferrer">
            LinkedIn 
          </a>
          <a href="https://github.com/santoshguntuka" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          
          {/* Add more social links as needed */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
