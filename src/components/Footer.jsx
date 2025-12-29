import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Mail, Phone } from "lucide-react";
import "../styles/footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-page">
      <footer className="site-footer">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <strong>Chhaava Studio</strong>
            <p className="footer-tagline">
              Capturing Moments, Creating Memories. Professional photography services with a cinematic touch.
            </p>
            <p className="footer-copyright">© {currentYear} Chhaava Studio. All rights reserved.</p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p className="footer-email">
              <Mail size={16} />
              <span>rp1204593@gmail.com</span>
            </p>
            <p className="footer-phone">
              <Phone size={16} />
              <span>+91 7498534480</span>
            </p>
            
            {/* Social Links */}
            <div className="footer-social">
              <a 
                href="https://www.instagram.com/chhaava_photography?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
                aria-label="Instagram"
              >
                <Instagram size={16} />
                <span>Instagram</span>
              </a>
              <a 
                href="https://wa.me/917498534480" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
                aria-label="WhatsApp"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
                <span>WhatsApp</span>
              </a>
              <a 
                href="https://youtube.com/chhaavastudio" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
                aria-label="YouTube"
              >
                <Youtube size={16} />
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>Made with ❤️ by Chhaava Studio | Professional Photography</p>
        </div>
      </footer>
    </div>
  );
}