import React, { useState } from "react";
import "../styles/contact.css"; 

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_ENDPOINT = "https://photography-dlic.onrender.com/api/contact";

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

      let data = {};
      try { 
        data = await res.json(); 
      } catch (parseErr) { 
        console.error("JSON parse error:", parseErr);
      }

      if (!res.ok) {
        setStatus({ 
          type: "error", 
          message: data.error || `Failed to send message (status ${res.status}).` 
        });
      } else {
        setStatus({ 
          type: "success", 
          message: data.message || "Message sent successfully!" 
        });
        setForm({ name: "", email: "", message: "" });
      }
    } catch (err) {
      console.error("Contact submit error:", err);
      setStatus({ 
        type: "error", 
        message: "Network error. Please try again later." 
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="contact-page">
      <section className="section">
        <div className="container">
          <div className="kicker">Contact</div>
          <h2>Get in Touch</h2>
          <p className="lead">
            For bookings, inquiries, or custom quotes — send us a message below.
          </p>

          <div className="contact-grid">
            <div className="form-section">
              <form className="contact-card" onSubmit={handleSubmit}>
                <div className="form-row">
                  <label htmlFor="name">Full Name *</label>
                  <input 
                    id="name" 
                    name="name" 
                    value={form.name} 
                    onChange={handleChange} 
                    type="text" 
                    required 
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div className="form-row">
                  <label htmlFor="email">Email Address *</label>
                  <input 
                    id="email" 
                    name="email" 
                    value={form.email} 
                    onChange={handleChange} 
                    type="email" 
                    required 
                    placeholder="your@email.com"
                  />
                </div>
                
                <div className="form-row">
                  <label htmlFor="message">Your Message *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="6" 
                    value={form.message} 
                    onChange={handleChange} 
                    required
                    placeholder="Tell us about your photography needs, event details, or any special requirements..."
                  ></textarea>
                </div>

                <div className="form-actions">
                  <button 
                    type="submit" 
                    className="btn btn-primary" 
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner"></span>
                        Sending...
                      </>
                    ) : "Send Message"}
                  </button>
                  
                  {status && (
                    <div className={`status-message ${status.type}`}>
                      {status.message}
                    </div>
                  )}
                </div>
              </form>
            </div>

            <div className="info-section">
              <div className="contact-card">
                <h3>📍 Studio Location</h3>
                <p className="address">
                  Madhukar Nagar, Erandol<br />
                  Pin Code: 425109<br />
                  Maharashtra, India
                </p>
                
                <div className="map-container">
                  <iframe
                    title="Chhaava Studio Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.123456789!2d75.3288441!3d20.9338308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd93d996ecd8daf%3A0x4a3f3e8cfcdaf594!2sMadhukar%20Nagar%20Open%20Space!5e0!3m2!1sen!2sin!4v1733740000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="contact-details">
                  <h4>📞 Contact Details</h4>
                  <p className="phone">+91 7498534480</p>
                  <p className="email">rp1204593@gmail.com</p>
                </div>

                <div className="working-hours">
                  <h4>⏰ Working Hours</h4>
                  <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                  <p>Saturday: 10:00 AM - 6:00 PM</p>
                  <p>Sunday: By Appointment Only</p>
                </div>
              </div>
            </div>
          </div>

          <div className="additional-info">
            <div className="info-card">
              <h3>💡 Quick Response</h3>
              <p>We typically respond within 24 hours during business days.</p>
            </div>
            
            <div className="info-card">
              <h3>📅 Booking Confirmation</h3>
              <p>Please allow 1-2 business days for booking confirmation and scheduling.</p>
            </div>
            
            <div className="info-card">
              <h3>🌍 Travel Available</h3>
              <p>Available for photography assignments across Maharashtra and India.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}