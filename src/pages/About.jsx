import React from "react";
import { Mail, MapPin, Globe, Camera, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/about.css"; 

export default function About() {
  return (
    <section className="about-page">
      <div className="container">
        {/* Header */}
        <header className="about-header">
          <p className="kicker">About</p>
          <h1>Chhaava - Storyteller with a Camera</h1>
          <p className="lead">
            With professional experience spanning years, I blend documentary and editorial styles 
            to deliver photographs that are both authentic and timeless.
          </p>
        </header>

        {/* Main Content Grid */}
        <div className="about-content">
          {/* Left Column - Main Content */}
          <div className="about-main">
            {/* Story Section */}
            <div className="story-section">
              <h2 className="story-title">My Story</h2>
              <p className="story-description">
                I work closely with clients to ensure every shoot feels personal and stress-free. 
                My approach combines technical expertise with artistic vision, creating images 
                that tell stories and capture authentic moments.
              </p>
              <p className="story-description">
                Specializing in natural light photography and authentic moments, I believe every 
                photograph should tell a story. From intimate portraits to grand celebrations, 
                my goal is to capture the emotion and beauty in every frame.
              </p>
            </div>

            {/* Services Section */}
            <div className="services-section">
              <h3>Services</h3>
              <ul className="services-list">
                <li className="service-item">
                  <strong>Wedding Photography</strong>
                  <span>Story-driven coverage capturing every special moment</span>
                </li>
                <li className="service-item">
                  <strong>Portrait Sessions</strong>
                  <span>Studio and on-location portraits for individuals and families</span>
                </li>
                <li className="service-item">
                  <strong>Nature & Landscape</strong>
                  <span>Fine art prints available for nature and landscape photography</span>
                </li>
                <li className="service-item">
                  <strong>Events & Editorial</strong>
                  <span>Coverage for conferences, launches, magazines, and corporate events</span>
                </li>
              </ul>
            </div>

            {/* Approach Section */}
            <div className="approach-section">
              <h3>My Approach</h3>
              <p className="approach-description">
                I prioritize authentic moments and natural light, combined with careful composition 
                and color grading to create images that stand the test of time. Each session is 
                tailored to your vision, ensuring results that exceed expectations.
              </p>
              
              <div className="approach-points">
                <div className="approach-point">
                  <div className="approach-icon">🎯</div>
                  <h4>Authentic Moments</h4>
                  <p>Capturing genuine emotions and natural interactions</p>
                </div>
                <div className="approach-point">
                  <div className="approach-icon">✨</div>
                  <h4>Natural Light</h4>
                  <p>Using available light to create soft, flattering images</p>
                </div>
                <div className="approach-point">
                  <div className="approach-icon">🎨</div>
                  <h4>Artistic Vision</h4>
                  <p>Creative composition and thoughtful color grading</p>
                </div>
                <div className="approach-point">
                  <div className="approach-icon">🤝</div>
                  <h4>Personal Service</h4>
                  <p>Tailored experience from planning to delivery</p>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="stats-section">
              <h3>By The Numbers</h3>
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">1+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Client Satisfaction</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Cities Traveled</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Card */}
          <aside className="about-sidebar">
            <div className="contact-card">
              <h3>Studio Information</h3>
              
              <div className="studio-info">
                <p className="studio-address">
                  <MapPin size={16} />
                  <span>Madhukar Nagar, Erandol<br />Pin Code: 425109<br />Maharashtra, India</span>
                </p>
                <p className="studio-travel">
                  <Globe size={16} />
                  <span>Available for travel worldwide</span>
                </p>
              </div>

              <div className="booking-info">
                <strong>Booking & Inquiries</strong>
                <a 
                  href="mailto:rp1204593@gmail.com" 
                  className="booking-email"
                  aria-label="Send email to rp1204593@gmail.com"
                >
                  <Mail size={16} />
                  <span>rp1204593@gmail.com</span>
                </a>
              </div>

              <div className="cta-section" style={{ marginTop: '2rem' }}>
                <Link to="/contact" className="cta-button">
                  <Camera size={16} />
                  <span>Book a Session</span>
                </Link>
              </div>
            </div>
          </aside>
        </div>

        {/* Bottom CTA */}
        <div className="about-cta">
          <Link to="/contact" className="cta-button">
            <Users size={16} />
            <span>Start Your Photography Journey</span>
          </Link>
        </div>
      </div>
    </section>
  );
}