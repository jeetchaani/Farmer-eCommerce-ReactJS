import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <footer>
    <div className="footer-section">
      <div className="footer-part">
        <h3>Farmetto</h3>
        <p>Welcome to our website. We provide quality products and services to meet your needs.</p>
      </div>
      <div className="footer-part">
        <h3>Important Links</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">Products</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </div>
      <div className="footer-part">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="/">FAQ</a></li>
          <li><a href="/">Terms of Service</a></li>
          <li><a href="/">Privacy Policy</a></li>
        </ul>
      </div>
      <div className="footer-part">
        <h3>Social Media</h3>
        <ul>
          <li><a href="/" target="_blank">Facebook</a></li>
          <li><a href="/" target="_blank">Twitter</a></li>
          <li><a href="/" target="_blank">Instagram</a></li>
        </ul>
      </div>
    </div>
    <div className="copyright-section">
      <p>&copy; 2023 Farmetto. All rights reserved.</p>
    </div>
  </footer>
    )
}
