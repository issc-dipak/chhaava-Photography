import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-bg" aria-hidden="true"></div>
        <div className="container hero-content">
          <div className="kicker">Fine Art & Storytelling</div>
          <h1> Capturing Moments</h1>
          <p className="tagline">Award-winning photographer specializing in weddings, portraits, and nature. I create timeless images with a cinematic touch.</p>
          <div className="cta">
            <Link to="/gallery" className="btn">View Gallery</Link>
            <a href="/contact" className="btn" style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.06)" }}>Contact</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Featured Work</h2>
          <p className="lead">A curated selection across weddings, portraits, landscapes and events.</p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div style={{ borderRadius: 8, overflow: "hidden" }}>
              <img src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=2d9b5e7a8f9b6d3b5a0f5b6d1a2f2c2b" alt="featured" style={{ width: "100%", display: "block" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ borderRadius: 8, overflow: "hidden" }}>
                <img src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=7b0e4f3d9a1f4b6a2b8b1c3d4e5f6a7b" alt="featured2" style={{ width: "100%", display: "block" }} />
              </div>
              <div style={{ borderRadius: 8, overflow: "hidden" }}>
                <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=ff9c0c3a5f6b0f6b8ea2cdf3a9a6b2d4" alt="featured3" style={{ width: "100%", display: "block" }} />
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}