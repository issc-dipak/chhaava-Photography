import React from "react";
import "../styles/services.css"; 

export default function ServicesSection() {
  return (
    <div className="services-page">
      <section className="services-section" aria-labelledby="services-heading">
        <div className="services-inner container">
          <header className="services-header">
            <p className="kicker">Our Services</p>
            <h2 id="services-heading">Professional photography services tailored to your needs</h2>
            <p className="lead">
              We blend creativity, technical skill and a client-first approach to produce images that
              tell your story. Choose a single service or combine packages for a complete experience.
            </p>
          </header>

          <div className="services-grid" role="list">
            <article className="service-card" role="listitem" aria-labelledby="svc-studio-title">
              <h3 id="svc-studio-title" className="service-title">Studio Photography</h3>
              <p className="service-desc">
                Controlled lighting and curated backdrops to deliver polished, high-quality images
                with consistent color and mood. Ideal for portraits, headshots and product shoots.
              </p>

              <div className="service-includes">
                <strong>What's included</strong>
                <ul>
                  <li>1–3 hour studio session with professional lighting</li>
                  <li>Assistance with posing and styling</li>
                  <li>Basic color correction and image selection (20 images)</li>
                  <li>High-resolution digital deliverables</li>
                </ul>
              </div>

              <div className="service-footer">
                <p className="suitable">Suitable for: Portraits, headshots, model cards, product imagery</p>
                <p className="price">Starting from ₹6,500</p>
              </div>
            </article>

            <article className="service-card" role="listitem" aria-labelledby="svc-outdoor-title">
              <h3 id="svc-outdoor-title" className="service-title">Outdoor Photoshoots</h3>
              <p className="service-desc">
                Natural light photography in locations of your choice — we work with environmental
                conditions to create authentic, emotive images for couples, families and lifestyle work.
              </p>

              <div className="service-includes">
                <strong>What's included</strong>
                <ul>
                  <li>On-location shoot (1–2 hours) with location scouting support</li>
                  <li>Flexible time to capture golden hour or candid moments</li>
                  <li>Basic retouching and color grading (25 images)</li>
                  <li>Online gallery for proofs and downloads</li>
                </ul>
              </div>

              <div className="service-footer">
                <p className="suitable">Suitable for: Engagements, family sessions, lifestyle, editorial</p>
                <p className="price">Starting from ₹8,000</p>
              </div>
            </article>

            <article className="service-card" role="listitem" aria-labelledby="svc-event-title">
              <h3 id="svc-event-title" className="service-title">Event Coverage</h3>
              <p className="service-desc">
                Discreet, comprehensive coverage for weddings, corporate events and private parties.
                We capture key moments, atmosphere and details so you can relive the day.
              </p>

              <div className="service-includes">
                <strong>What's included</strong>
                <ul>
                  <li>Full-event coverage options (partial to full day)</li>
                  <li>One or more experienced photographers (as required)</li>
                  <li>Event highlight gallery + full-resolution images</li>
                  <li>Optional albums, prints and extended editing</li>
                </ul>
              </div>

              <div className="service-footer">
                <p className="suitable">Suitable for: Weddings, conferences, award nights, private events</p>
                <p className="price">Contact for Quote</p>
              </div>
            </article>

            <article className="service-card" role="listitem" aria-labelledby="svc-retouch-title">
              <h3 id="svc-retouch-title" className="service-title">Photo Editing &amp; Retouching</h3>
              <p className="service-desc">
                Professional post-production to elevate your images — from basic correction to high-end
                retouching while preserving natural texture and detail.
              </p>

              <div className="service-includes">
                <strong>What's included</strong>
                <ul>
                  <li>Color correction, exposure and tone adjustments</li>
                  <li>Skin retouching, blemish removal and advanced compositing (as requested)</li>
                  <li>Consistent color grading across a full set</li>
                  <li>Delivery in web- and print-ready formats</li>
                </ul>
              </div>

              <div className="service-footer">
                <p className="suitable">Suitable for: Portrait batches, e-commerce catalogs, editorial series</p>
                <p className="price">Starting from ₹1,200</p>
              </div>
            </article>
          </div>

          <div className="services-cta center" style={{ marginTop: "1.25rem" }}>
            <a className="btn btn--primary" href="/contact">Contact for Booking</a>
          </div>
        </div>
      </section>
    </div>
  );
}