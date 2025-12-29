import React, { useState } from 'react';
import "../styles/booking.css"; 

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    message: '',
    packageType: '',
    duration: '1'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const services = [
    'Wedding Photography',
    'Pre-Wedding Shoot',
    'Portrait Photography',
    'Product Photography',
    'Commercial Photography',
    'Event Coverage',
    'Maternity Shoot',
    'Family Photography'
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const packages = [
    { id: 'basic', name: 'Basic', price: '₹26999' },
    { id: 'standard', name: 'Standard', price: '₹44999' },
    { id: 'premium', name: 'Premium', price: '₹71999' },
    { id: 'custom', name: 'Custom', price: 'Custom Quote' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Booking submitted:', formData);
      setIsSubmitting(false);
      setSubmitMessage('Booking request submitted successfully! We will contact you shortly.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        service: '',
        message: '',
        packageType: '',
        duration: '1'
      });
      
      // Clear message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1500);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="booking-page">
      <div className="booking-container">
        <div className="booking-header">
          <h1>Book Your Photography Session</h1>
          <p>Fill out the form below to schedule your photography session</p>
        </div>

        <div className="booking-content">
          <div className="booking-form-section">
            <form onSubmit={handleSubmit} className="booking-form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date">Preferred Date *</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={today}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="time">Preferred Time *</label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Time Slot</option>
                    {timeSlots.map((time, index) => (
                      <option key={index} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="service">Service Type *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="duration">Duration (hours) *</label>
                  <select
                    id="duration"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    required
                  >
                    <option value="1">1 hour</option>
                    <option value="2">2 hours</option>
                    <option value="3">3 hours</option>
                    <option value="4">4 hours</option>
                    <option value="8">Full day (8 hours)</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Package Selection</label>
                <div className="package-options">
                  {packages.map(pkg => (
                    <div 
                      key={pkg.id} 
                      className={`package-option ${formData.packageType === pkg.id ? 'selected' : ''}`}
                      onClick={() => setFormData(prev => ({ ...prev, packageType: pkg.id }))}
                    >
                      <div className="package-name">{pkg.name}</div>
                      <div className="package-price">{pkg.price}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Additional Requirements</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your specific requirements, location, number of people, etc."
                  rows="4"
                />
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Processing...' : 'Book Now'}
              </button>

              {submitMessage && (
                <div className="success-message">
                  {submitMessage}
                </div>
              )}
            </form>
          </div>

          <div className="booking-info-section">
            <div className="info-card">
              <h3>📞 Contact Information</h3>
              <p><strong>Phone:</strong> +91 7498534480</p>
              <p><strong>Email:</strong>  rp1204593@gmail.com</p>
              <p><strong>Address:</strong> Madhukar Nagar Erandol 425109 Maharashtra</p>
            </div>

            <div className="info-card">
              <h3>⏰ Working Hours</h3>
              <p><strong>Monday - Friday:</strong> 9:00 AM - 7:00 PM</p>
              <p><strong>Saturday:</strong> 10:00 AM - 6:00 PM</p>
              <p><strong>Sunday:</strong> By Appointment Only</p>
            </div>

            <div className="info-card">
              <h3>ℹ️ Booking Information</h3>
              <ul>
                <li>24-hour advance booking required</li>
                <li>50% advance payment to confirm booking</li>
                <li>Free rescheduling (24 hours notice)</li>
                <li>Studio equipment provided</li>
                <li>Location shoots available</li>
              </ul>
            </div>

            <div className="info-card">
              <h3>📸 What to Expect</h3>
              <ul>
                <li>Professional photographer</li>
                <li>High-quality equipment</li>
                <li>Edited digital photos</li>
                <li>Online gallery access</li>
                <li>Print options available</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;