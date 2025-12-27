import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/gallery", label: "Gallery" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div className="brand">
            <div className="logo">C</div>
            <div>
              <div style={{ fontSize: 14 }}>Chhaava Studio</div>
              <div style={{ fontSize: 12, color: "var(--muted)" }}>Photography</div>
            </div>
          </div>
        </div>

        <div className="nav-links" aria-hidden={open ? "false" : "true"}>
          {links.map((l) => (
            <Link key={l.to} to={l.to} className={loc.pathname === l.to ? "active" : ""}>
              {l.label}
            </Link>
          ))}
        </div>

        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M3 6h18M3 12h18M3 18h18" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ padding: "12px 0", borderTop: "1px solid rgba(255,255,255,0.03)" }}>
          <div className="container" style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                style={{
                  padding: "10px 12px",
                  borderRadius: 8,
                  color: loc.pathname === l.to ? "white" : "var(--muted)",
                  background: loc.pathname === l.to ? "var(--glass)" : "transparent",
                  textDecoration: "none",
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}