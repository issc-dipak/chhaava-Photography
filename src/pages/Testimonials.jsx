import React, { useState } from "react";
import { Star, MessageCircle, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom"; 
import "../styles/Testimonials.css"; 

const testimonialsData = [
  {
    id: 1,
    name: "Anita Sharma",
    role: "Wedding Client",
    text: "Amazing work — captured our day perfectly! Every moment was beautifully preserved. The attention to detail and ability to capture raw emotions was outstanding.",
    rating: 5,
    category: "wedding",
    featured: true,
  },
  {
    id: 2,
    name: "Rahul Patel",
    role: "Portrait Client",
    text: "Very professional and quick turnaround. The portraits came out exactly as I envisioned. The lighting and composition were perfect!",
    rating: 5,
    category: "portrait",
    featured: false,
  },
  {
    id: 3,
    name: "Priya Mehta",
    role: "Corporate Event",
    text: "Excellent coverage of our company conference. The team was discreet yet captured all key moments. Highly recommend for corporate events!",
    rating: 4,
    category: "events",
    featured: false,
  },
  {
    id: 4,
    name: "Sanjay Kumar",
    role: "Family Photography",
    text: "Our family photoshoot was a wonderful experience. The photographer made us feel comfortable and the results were stunning.",
    rating: 5,
    category: "portrait",
    featured: false,
  },
  {
    id: 5,
    name: "Neha Singh",
    role: "Product Shoot Client",
    text: "Professional product photography that elevated our brand. The attention to detail and creative angles were impressive.",
    rating: 4,
    category: "commercial",
    featured: false,
  },
  {
    id: 6,
    name: "Vikram Desai",
    role: "Destination Wedding",
    text: "Traveled with us to Goa and captured the most beautiful moments. Worth every penny! The memories will last a lifetime.",
    rating: 5,
    category: "wedding",
    featured: true,
  },
];

const categories = ["all", "wedding", "portrait", "events", "commercial"];

export default function Testimonials() {
  const [filter, setFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(false);

  const filteredTestimonials = testimonialsData.filter(
    (testimonial) => filter === "all" || testimonial.category === filter
  );

  const testimonialsToShow = filteredTestimonials.slice(0, visibleCount);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 3);
      setLoading(false);
    }, 800);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<span key={i} className="star filled">★</span>);
      } else {
        stars.push(<span key={i} className="star">☆</span>);
      }
    }
    return stars;
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="testimonials-page">
      <section className="testimonials-section">
        <div className="container">
          {/* Header */}
          <header className="testimonials-header">
            <p className="kicker">Testimonials</p>
            <h1>What Our Clients Say</h1>
            <p className="lead">
              Don't just take our word for it. Read what our clients have to say about 
              their experience working with Chhaava Studio.
            </p>
          </header>

          {/* Filter Buttons */}
          <div className="testimonials-filter">
            <button
              className={`filter-btn ${filter === "all" ? "active" : ""}`}
              onClick={() => setFilter("all")}
            >
              All Reviews
            </button>
            {categories.slice(1).map((category) => (
              <button
                key={category}
                className={`filter-btn ${filter === category ? "active" : ""}`}
                onClick={() => setFilter(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Testimonials Grid */}
          {testimonialsToShow.length === 0 ? (
            <div className="testimonials-empty">
              <div className="empty-icon">💬</div>
              <h3>No testimonials found</h3>
              <p>Try selecting a different category or check back later.</p>
            </div>
          ) : (
            <>
              <div className="testimonials-grid">
                {testimonialsToShow.map((testimonial) => (
                  <blockquote 
                    className={`testimonial ${testimonial.featured ? "featured" : ""}`} 
                    key={testimonial.id}
                  >
                    {testimonial.featured && (
                      <span className="featured-badge">Featured</span>
                    )}
                    
                    <div className="testimonial-rating">
                      {renderStars(testimonial.rating)}
                    </div>
                    
                    <p className="testimonial__text">
                      "{testimonial.text}"
                    </p>
                    
                    <footer className="testimonial__author">
                      <div className="author-avatar">
                        {getInitials(testimonial.name)}
                      </div>
                      <div className="author-info">
                        <cite className="author-name">{testimonial.name}</cite>
                        <div className="author-role">{testimonial.role}</div>
                      </div>
                    </footer>
                  </blockquote>
                ))}
              </div>

              {/* Load More Button */}
              {visibleCount < filteredTestimonials.length && (
                <div className="load-more-container">
                  <button
                    className={`load-more-btn ${loading ? "loading" : ""}`}
                    onClick={handleLoadMore}
                    disabled={loading}
                  >
                    {loading ? "Loading..." : "Load More Reviews"}
                    {!loading && <ChevronDown size={16} />}
                  </button>
                </div>
              )}
            </>
          )}

          {/* CTA Section */}
          <div className="testimonials-cta">
            <div className="cta-card">
              <MessageCircle size={32} style={{ marginBottom: '1rem', color: 'var(--accent)' }} />
              <h3>Ready to Create Your Story?</h3>
              <p className="lead">
                Join our satisfied clients and let us capture your special moments 
                with the same care and professionalism.
              </p>
              <div className="cta-buttons">
                <Link to="/contact" className="cta-btn primary">
                  Book Your Session
                </Link>
                <Link to="/portfolio" className="cta-btn secondary">
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}