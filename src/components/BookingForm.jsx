import React, { useState } from 'react';
import "../styles/booking.css"; 
const BookingForm = ({ onBookingComplete }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    location: '',
    budget: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const eventTypes = [
    'Wedding',
    'Pre-wedding', 
    'Portrait',
    'Event',
    'Travel',
    'Other'
  ];

  const budgetRanges = [
    '₹5,000 - ₹15,000',
    '₹15,000 - ₹30,000',
    '₹30,000 - ₹50,000',
    '₹50,000 - ₹1,00,000',
    '₹1,00,000+',
    'Flexible / To Discuss'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    if (!formData.eventType) {
      newErrors.eventType = 'Please select an event type';
    }
    
    if (!formData.eventDate) {
      newErrors.eventDate = 'Please select an event date';
    } else if (new Date(formData.eventDate) < new Date()) {
      newErrors.eventDate = 'Event date cannot be in the past';
    }
    
    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    
    try {
      // Send booking data to backend
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSubmitted(true);
        onBookingComplete({
          type: 'success',
          message: `Booking submitted successfully! We'll contact you within 24 hours. Booking ID: ${data.bookingId}`
        });
        
        // Send WhatsApp notification
        const whatsappMessage = encodeURIComponent(
          `New Photography Booking Request! 📸\n\n` +
          `👤 Name: ${formData.fullName}\n` +
          `📱 Phone: ${formData.phone}\n` +
          `📧 Email: ${formData.email}\n` +
          `🎯 Event: ${formData.eventType}\n` +
          `📅 Date: ${formData.eventDate}\n` +
          `📍 Location: ${formData.location}\n` +
          `💰 Budget: ${formData.budget || 'Not specified'}\n\n` +
          `Please respond within 24 hours.`
        );
        
        window.open(`https://wa.me/7498534480?text=${whatsappMessage}`, '_blank');
        
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          eventType: '',
          eventDate: '',
          location: '',
          budget: '',
          message: ''
        });
        
        setTimeout(() => {
          setSubmitted(false);
          onBookingComplete(null);
        }, 5000);
        
      } else {
        throw new Error(data.message || 'Booking failed');
      }
    } catch (error) {
      console.error('Booking error:', error);
      onBookingComplete({
        type: 'error',
        message: 'Booking failed. Please try again or contact us directly via WhatsApp.'
      });
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="booking-success-card">
        <div className="success-animation">
          <div className="checkmark">✓</div>
        </div>
        <h2>Booking Submitted Successfully!</h2>
        <p className="success-message">
          Thank you for your booking request. We've received your details and will contact you 
          within 24 hours to confirm availability.
        </p>
        <div className="success-details">
          <p><strong>What happens next:</strong></p>
          <ul>
            <li>📞 We'll call you on <strong>{formData.phone}</strong> within 24 hours</li>
            <li>📧 Check your email <strong>{formData.email}</strong> for confirmation</li>
            <li>💬 WhatsApp message sent for faster communication</li>
            <li>📅 Date reserved: <strong>{formData.eventDate}</strong></li>
          </ul>
        </div>
        <button 
          onClick={() => setSubmitted(false)}
          className="btn btn-secondary"
        >
          Book Another Session
        </button>
      </div>
    );
  }

  return (
    <div className="booking-form-container">
      <div className="form-header">
        <h2>Booking Details</h2>
        <p>Fill in the details below to check availability and book your session</p>
      </div>
      
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-grid">
          {/* Full Name */}
          <div className="form-group">
            <label htmlFor="fullName">
              Full Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className={errors.fullName ? 'error' : ''}
            />
            {errors.fullName && (
              <span className="error-message">{errors.fullName}</span>
            )}
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">
              Email Address <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className={errors.email ? 'error' : ''}
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>

          {/* Phone */}
          <div className="form-group">
            <label htmlFor="phone">
              Phone / WhatsApp <span className="required">*</span>
            </label>
            <div className="phone-input-wrapper">
              <span className="country-code">+91</span>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="98765 43210"
                maxLength="10"
                className={errors.phone ? 'error' : ''}
              />
            </div>
            {errors.phone && (
              <span className="error-message">{errors.phone}</span>
            )}
          </div>

          {/* Event Type */}
          <div className="form-group">
            <label htmlFor="eventType">
              Event Type <span className="required">*</span>
            </label>
            <select
              id="eventType"
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              className={errors.eventType ? 'error' : ''}
            >
              <option value="">Select event type</option>
              {eventTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            {errors.eventType && (
              <span className="error-message">{errors.eventType}</span>
            )}
          </div>

          {/* Event Date */}
          <div className="form-group">
            <label htmlFor="eventDate">
              Event Date <span className="required">*</span>
            </label>
            <input
              type="date"
              id="eventDate"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
              className={errors.eventDate ? 'error' : ''}
            />
            {errors.eventDate && (
              <span className="error-message">{errors.eventDate}</span>
            )}
          </div>

          {/* Location */}
          <div className="form-group">
            <label htmlFor="location">
              Location / City <span className="required">*</span>
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Where will the shoot take place?"
              className={errors.location ? 'error' : ''}
            />
            {errors.location && (
              <span className="error-message">{errors.location}</span>
            )}
          </div>

          {/* Budget Range */}
          <div className="form-group">
            <label htmlFor="budget">Budget Range (Optional)</label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
            >
              <option value="">Select budget range</option>
              {budgetRanges.map(range => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>
            <small className="helper-text">Helps us provide suitable package options</small>
          </div>
        </div>

        {/* Message */}
        <div className="form-group full-width">
          <label htmlFor="message">
            Message / Specific Requirements
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            placeholder="Tell us about your vision, specific shots you want, number of people, theme, etc."
          ></textarea>
        </div>

        {/* Form Actions */}
        <div className="form-actions">
          <button 
            type="submit" 
            className="btn btn-primary btn-booking"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner"></span>
                Processing Booking...
              </>
            ) : (
              'Check Availability & Book Shoot'
            )}
          </button>
          
          <div className="alternative-booking">
            <p className="or-divider">or</p>
            <a 
              href={`https://wa.me/7498534480?text=${encodeURIComponent('Hello! I want to book a photography session.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <span className="whatsapp-icon">💬</span>
              Book via WhatsApp (Instant)
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;