import React from "react";
import "../styles/Pricing.css"; 

export default function Pricing() {
  return (
    <div className="services-page">
      <main className="pricing-page" aria-labelledby="pricing-heading">
        <header className="pricing-header container">
          <p className="kicker">Pricing</p>
          <h1 id="pricing-heading">Photography Packages — Clear, straightforward and tailored</h1>
          <p className="lead">
            Our packages are designed for clarity and flexibility. Choose a ready-made package or
            contact us to customise a solution that fits your project and budget.
          </p>
        </header>

        <section className="pricing-cards container">
          <article className="plan-card" aria-labelledby="plan-basic">
            <div className="plan-head">
              <h2 id="plan-basic" className="plan-title">Basic</h2>
              <p className="plan-tag">Perfect for headshots & quick personal sessions</p>
            </div>

            <ul className="plan-features">
              <li><strong>Ideal for:</strong> Professionals, LinkedIn/headshots, quick portraits</li>
              <li><strong>Duration:</strong> 30–45 minutes studio session</li>
              <li><strong>Edited photos:</strong> 10 professionally edited images</li>
              <li><strong>Type of shoot:</strong> Studio</li>
              <li><strong>Editing level:</strong> Basic color correction and minor retouching</li>
              <li><strong>Delivery:</strong> High-resolution digital files via online gallery within 5 business days</li>
              <li><strong>Price:</strong> Fixed price — <span className="price">₹6,500</span></li>
            </ul>

            <div className="plan-actions">
              <a className="btn btn-primary" href="/booking">Book Basic</a>
              <a className="btn btn-ghost" href="/contact">Contact Us</a>
            </div>
          </article>

          <article className="plan-card featured" aria-labelledby="plan-standard">
            <div className="plan-head">
              <h2 id="plan-standard" className="plan-title">Standard</h2>
              <p className="plan-tag">Balanced package for families, couples and portfolios</p>
            </div>

            <ul className="plan-features">
              <li><strong>Ideal for:</strong> Couples, families, personal branding, lifestyle shoots</li>
              <li><strong>Duration:</strong> 1–2 hour session (studio or outdoor)</li>
              <li><strong>Edited photos:</strong> 25 professionally edited images</li>
              <li><strong>Type of shoot:</strong> Studio or Outdoor</li>
              <li><strong>Editing level:</strong> Full color grading and natural retouching</li>
              <li><strong>Delivery:</strong> Online gallery + downloadable high-res and web-ready files within 7–10 business days</li>
              <li><strong>Price:</strong> Fixed price — <span className="price">₹12,000</span></li>
            </ul>

            <div className="plan-actions">
              <a className="btn btn-primary" href="/booking">Book Standard</a>
              <a className="btn btn-ghost" href="/contact">Request Details</a>
            </div>
          </article>

          <article className="plan-card" aria-labelledby="plan-premium">
            <div className="plan-head">
              <h2 id="plan-premium" className="plan-title">Premium</h2>
              <p className="plan-tag">Comprehensive coverage and premium retouching — ideal for weddings & large projects</p>
            </div>

            <ul className="plan-features">
              <li><strong>Ideal for:</strong> Weddings, full-day events, commercial/editorial projects</li>
              <li><strong>Duration:</strong> Half-day to full-day coverage (customisable)</li>
              <li><strong>Edited photos:</strong> 75+ edited highlight images (full set available on request)</li>
              <li><strong>Type of shoot:</strong> Event / Outdoor / Studio (hybrid options available)</li>
              <li><strong>Editing level:</strong> Advanced retouching, skin & beauty work, selective composites available</li>
              <li><strong>Delivery:</strong> Curated highlight gallery within 7–14 business days; full-resolution delivery and album options within agreed timeline</li>
              <li><strong>Price:</strong> Contact for Quote — <span className="muted">starting from ₹25,000</span></li>
            </ul>

            <div className="plan-actions">
              <a className="btn btn-primary" href="/booking">Request Premium Quote</a>
              <a className="btn btn-ghost" href="/contact">Discuss Requirements</a>
            </div>
          </article>
        </section>

        <section className="pricing-notes container">
          <p className="muted small">
            Notes: Travel, special permits, venue fees, extended editing requests and albums are available
            as add-ons and may affect the final quote. For bespoke packages and corporate rates please contact us
            with project details — we will respond with a tailored proposal and clear timeline.
          </p>
        </section>
      </main>
    </div>
  );
}