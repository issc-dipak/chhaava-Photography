import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div style={{ marginBottom: 8 }}>© {new Date().getFullYear()} Chhaava Studio — All rights reserved</div>
        <div style={{ color: "var(--muted)", fontSize: 13 }}>
          Built with care • <a href="/privacy" style={{ color: "var(--muted)" }}>Privacy</a>
        </div>
      </div>
    </footer>
  );
} 