import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2>LoanAptech</h2>
            <p>
              Your trusted partner for fast, transparent, and affordable loan
              solutions
            </p>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <u>
                <li>Home</li>
                <li>Loan Products</li>
                <li>Apply Now</li>
                <li>About Us</li>
              </u>
            </ul>
          </div>
          <div className="footer-links">
            <h3>Support</h3>
            <ul>
              <u>
                <li>Contact US</li>
                <li>FAQ</li>
                <li>Privacy Policy</li>
                <li>Terms of Services</li>
              </u>
            </ul>
          </div>
          <div className="footer-links">
            <h3>Get in Touch</h3>
            <ul>
              <u>
                <li>support@loanaptech.com</li>
                <li>+1 (555) 123-4567</li>
                <li>Mon-Fri: 9AM=6PM EST</li>
              </u>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          2026 LoanAptech. All rights reserved
          <br />
          Lisensed by relevant financial authorities
        </div>
      </div>
    </div>
  );
}
export default Footer;
