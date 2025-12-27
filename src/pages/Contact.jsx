import React from "react";

export default function Contact() {
  const [form, setForm] = React.useState({ name: "", email: "", message: "" });
  const [status, setStatus] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  // Use the backend endpoint directly; you can set REACT_APP_API_URL to override (e.g., production)
  const API_ENDPOINT = (process.env.REACT_APP_API_URL ? `${process.env.REACT_APP_API_URL.replace(/\/$/, "")}/api/contact` : "https://photography-dlic.onrender.com/api/contact");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function validate() {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.email.match(/^\S+@\S+\.\S+$/)) return "Please enter a valid email.";
    if (!form.message.trim()) return "Please enter a message.";
    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(null);

    const err = validate();
    if (err) {
      setStatus({ type: "error", message: err });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      // try to parse JSON safely
      let data = {};
      try { data = await res.json(); } catch (parseErr) { /* ignore */ }

      if (!res.ok) {
        setStatus({ type: "error", message: data.error || `Failed to send message (status ${res.status}).` });
      } else {
        setStatus({ type: "success", message: data.message || "Message sent successfully." });
        setForm({ name: "", email: "", message: "" });
      }
    } catch (err) {
      console.error("Contact submit error:", err);
      setStatus({ type: "error", message: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="section">
      <div className="container">
        <div className="kicker">Contact</div>
        <h2>Get in touch</h2>
        <p className="lead">For bookings, questions or prints — send a message below.</p>

        <div className="contact-grid" style={{ marginTop: 12 }}>
          <div>
            <form className="contact-card" onSubmit={handleSubmit}>
              <div className="form-row">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" value={form.name} onChange={handleChange} type="text" required />
              </div>
              <div className="form-row">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" value={form.email} onChange={handleChange} type="email" required />
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="6" value={form.message} onChange={handleChange} required></textarea>
              </div>

              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <button type="submit" className="btn" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </button>
                {status && (
                  <div style={{ color: status.type === "success" ? "#a7f3d0" : "#fecaca" }}>
                    {status.message}
                  </div>
                )}
              </div>
            </form>
          </div>

          <aside>
            <div className="contact-card">
              <h3>Studio Location</h3>
              <p style={{ color: "var(--muted)" }}>Madhukar Nagar<br/>Erandol, Maharashtra</p>
              <div style={{ height: 320, marginTop: 12, borderRadius: 8, overflow: "hidden" }}>
               <iframe
  title="Studio location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.123456789!2d75.3288441!3d20.9338308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd93d996ecd8daf%3A0x4a3f3e8cfcdaf594!2sMadhukar%20Nagar%20Open%20Space!5e0!3m2!1sen!2sin!4v1733740000000"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}