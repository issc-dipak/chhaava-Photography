import React from "react";

export default function About() {
  return (
    <section className="section">
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 420px", gap: 20 }}>
          <div>
            <div className="kicker">About</div>
            <h2>Chhaava storyteller with a camera</h2>
            <p className="lead">
             professional experience, I blend documentary and editorial styles to deliver photographs that are both authentic and timeless. I work closely with clients to ensure every shoot feels personal and stress-free.
            </p>

            <h3 style={{ marginTop: 16 }}>Services</h3>
            <ul style={{ color: "var(--muted)", lineHeight: 1.8 }}>
              <li>Wedding Photography — Story-driven coverage</li>
              <li>Portrait Sessions — Studio and on-location</li>
              <li>Nature & Landscape — Fine art prints available</li>
              <li>Events & Editorial — Conferences, launches, magazines</li>
            </ul>

            <h3 style={{ marginTop: 16 }}>Approach</h3>
            <p style={{ color: "var(--muted)" }}>
              I prioritize authentic moments and natural light, combined with careful composition and color grading to create images that stand the test of time.
            </p>
          </div>

          <aside className="contact-card">
            <h3>Studio Info</h3>
            <p style={{ color: "var(--muted)" }}>
              madhukar nagar erandol pin 425109
              <br />
              Available for travel worldwide.
            </p>
            <div style={{ marginTop: 8 }}>
              <strong>Booking:</strong>
              <div style={{ color: "var(--muted)", marginTop: 6 }}>rp1204593@gmail.com</div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}