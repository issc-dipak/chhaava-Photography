import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css"; 

// Premium Indian Wedding Images (HD Quality)
const INDIAN_WEDDING_PHOTOS = [
  {
   src: "/assets/gallery/mehndi7.jpg",
    alt: "Indian Wedding Mehndi Ceremony",
    category: "mehndi"
  },
  {
    src: "/assets/gallery/mehndi6.jpg",
    alt: "Indian Wedding Mehndi Ceremony",
    category: "mehndi"
  },
  {
    src: "/assets/gallery/mehndi5.jpg",
    alt: "Indian Wedding Mehndi Ceremony",
    category: "mehndi"
  },
  {
    src: "/assets/gallery/mehndi.jpg",
    alt: "Indian Wedding Mehndi Ceremony",
    category: "mehndi"
  },
  {
    src: "/assets/gallery/mehndi3.jpg",
    alt: "Indian Wedding Mehndi Ceremony",
    category: "mehndi"
  },
  {
     src: "/assets/gallery/mehndi2.jpg",
    alt: "Indian Wedding Mehndi Ceremony",
    category: "mehndi"
  },
  {
    src: "/assets/gallery/mehndi1.jpg",
    alt: "Indian Wedding Mehndi Ceremony",
    category: "mehndi"
  },
  {
     src: "/assets/gallery/mehndi4.jpg",
    alt: "Indian Wedding Mehndi Ceremony",
    category: "mehndi"
  },
  {
    src: "/assets/gallery/bridal.jpg",
    alt: "Traditional Indian Bride",
    category: "bridal"
  },
   {
  src: "/assets/gallery/bridal1.jpg",
  alt: "Traditional Indian Bride ",
  category: "bridal"
},
{
  src: "/assets/gallery/bridal2.jpg",
  alt: "Traditional Indian Bride ",
  category: "bridal"
},
{
  src: "/assets/gallery/bridal3.jpg",
  alt: "Traditional Indian Bride ",
  category: "bridal"
},
{
  src: "/assets/gallery/bridal4.jpg",
  alt: "Traditional Indian Bride ",
  category: "bridal"
},
{
  src: "/assets/gallery/bridal5.jpg",
  alt: "Traditional Indian Bride ",
  category: "bridal"
},
{
  src: "/assets/gallery/bridal6.jpg",
  alt: "Traditional Indian Bride ",
  category: "bridal"
},
{
  src: "/assets/gallery/bridal7.jpg",
  alt: "Traditional Indian Bride ",
  category: "bridal"
},

  {
    src: "/assets/gallery/wedding.jpg",
    alt: "Indian Wedding Pheras",
    category: "wedding"
  },
  {
    src: "/assets/gallery/wedding1.jpg",
    alt: "Indian Wedding Pheras",
    category: "wedding"
  },
  {
    src: "/assets/gallery/wedding2.jpg",
    alt: "Indian Wedding Pheras",
    category: "wedding"
  },
  {
    src: "/assets/gallery/wedding3.jpg",
    alt: "Indian Wedding Pheras",
    category: "wedding"
  },
  {
    src: "/assets/gallery/wedding4.jpg",
    alt: "Indian Wedding Pheras",
    category: "wedding"
  },
  {
    src: "/assets/gallery/wedding5.jpg",
    alt: "Indian Wedding Pheras",
    category: "wedding"
  },
  {
    src: "/assets/gallery/wedding6.jpg",
    alt: "Indian Wedding Pheras",
    category: "wedding"
  },
  {
    src: "/assets/gallery/wedding7.jpg",
    alt: "Indian Wedding Pheras",
    category: "wedding"
  },
  {
    src: "/assets/gallery/wedding8.jpg",
    alt: "Indian Wedding Pheras",
    category: "wedding"
  },
  {
    src: "/assets/gallery/wedding9.jpg",
    alt: "Indian Wedding Pheras",
    category: "wedding"
  },
  {
    src: "/assets/gallery/wedding10.jpg",
    alt: "Indian Wedding Pheras",
    category: "wedding"
  },
   
  {
    src: "/assets/gallery/haldi2.jpg",
    alt: "Indian Wedding Haldi Ceremony",
    category: "haldi"
  },
  {
    src: "/assets/gallery/wedding11.jpeg",
    alt: "Indian Wedding Haldi Ceremony",
    category: "haldi"
  },
  {
    src: "/assets/gallery/haldi2.jpg",
    alt: "Indian Wedding Haldi Ceremony",
    category: "haldi"
  },
  {
    src: "/assets/gallery/haldi3.jpg",
    alt: "Indian Wedding Haldi Ceremony",
    category: "haldi"
  },
  {
    src: "/assets/gallery/haldi4.jpg",
    alt: "Indian Wedding Haldi Ceremony",
    category: "haldi"
  },
  {
    src: "/assets/gallery/haldi5.jpg",
    alt: "Indian Wedding Haldi Ceremony",
    category: "haldi"
  },
  {
    src: "/assets/gallery/haldi6.jpg",
    alt: "Indian Wedding Haldi Ceremony",
    category: "haldi"
  },
  {
    src: "/assets/gallery/haldi7.jpg",
    alt: "Indian Wedding Haldi Ceremony",
    category: "haldi"
  },
  
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isAutoScroll, setIsAutoScroll] = useState(true);

  const categories = [
    "all", "mehndi", "bridal", "wedding", "haldi", 
  ];

  const filteredPhotos = activeCategory === "all" 
    ? INDIAN_WEDDING_PHOTOS 
    : INDIAN_WEDDING_PHOTOS.filter(photo => photo.category === activeCategory);

  // Auto scroll effect for gallery
  useEffect(() => {
    if (!isAutoScroll) return;

    const interval = setInterval(() => {
      const currentIndex = categories.indexOf(activeCategory);
      const nextIndex = (currentIndex + 1) % categories.length;
      setActiveCategory(categories[nextIndex]);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeCategory, isAutoScroll]);

  return (
    <div className="home-page">
      {/* Hero Section with Video Background */}
      <section className="hero">
       <div className="hero-video" aria-hidden="true">
  <video 
    autoPlay 
    muted 
    loop 
    playsInline
    preload="metadata"
    disablePictureInPicture
    disableRemotePlayback
    poster="https://images.pexels.com/photos/29967503/pexels-photo-29967503.jpeg"
  >
    <source 
      src="https://pixabay.com/videos/download/video-87806_medium.mp4" 
      type="video/mp4" 
    />
    {/* Fallback for unsupported browsers */}
    <img 
      src="https://images.pexels.com/photos/29967503/pexels-photo-29967503.jpeg" 
      alt="Indian Wedding Couple Portrait" 
    />
  </video>
  <div className="video-overlay" role="presentation"></div>
</div>
        
        <div className="container hero-content">
          <div className="kicker">Premium Indian Wedding Photography</div>
          <h1 className="hero-title">
            <span className="title-line">Capturing Timeless</span>
            <span className="title-line accent">Indian Wedding Stories</span>
          </h1>
          <p className="tagline">
            Specializing in traditional Indian weddings across Maharashtra. 
            We capture every emotion, ritual, and celebration with artistic excellence.
          </p>
          <div className="stats">
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Weddings Captured</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
          </div>
          <div className="cta">
            <Link to="/gallery" className="btn btn-primary">
              <span>View Our gallery</span>
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </Link>
            <Link to="/booking" className="btn btn-secondary">
              <span>Book Your Wedding</span>
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2"/>
                <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </Link>
          </div>
        </div>
        
      </section>

      {/* Featured Indian Wedding Gallery */}
      <section className="featured-gallery-section">
        <div className="container">
          <div className="section-header">
            <div className="kicker">Our Portfolio</div>
            <h2>Indian Wedding Gallery</h2>
            <p className="lead">
              Experience the beauty of Indian weddings through our lens. 
              From Mehndi to Reception, we capture every precious moment.
            </p>
          </div>

          {/* Category Filter */}
          <div className="category-filter">
            <div className="filter-buttons">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => {
                    setActiveCategory(cat);
                    setIsAutoScroll(false);
                  }}
                  aria-label={`Show ${cat} photos`}
                >
                  <span className="filter-icon">
                    {cat === 'mehndi' && '🖌️'}
                    {cat === 'bridal' && '👰'}
                    {cat === 'wedding' && '💑'}
                    {cat === 'haldi' && '🟡'}
                    {cat === 'sangeet' && '💃'}
                    {cat === 'all' && '✨'}
                  </span>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
            <div className="auto-scroll-toggle">
              <button 
                className={`toggle-btn ${isAutoScroll ? 'active' : ''}`}
                onClick={() => setIsAutoScroll(!isAutoScroll)}
                aria-label={isAutoScroll ? "Pause auto scroll" : "Start auto scroll"}
              >
                <span className="toggle-icon">
                  {isAutoScroll ? '⏸️' : '▶️'}
                </span>
                Auto Scroll {isAutoScroll ? 'On' : 'Off'}
              </button>
            </div>
          </div>

          {/* Masonry Grid Gallery */}
          <div className="masonry-grid">
            {filteredPhotos.map((photo, index) => (
              <div 
                key={index} 
                className={`masonry-item category-${photo.category}`}
                data-category={photo.category}
              >
                <div className="photo-card">
                  <img 
                    src={photo.src} 
                    alt={photo.alt} 
                    loading="lazy"
                    className="photo-image"
                  />
                  <div className="photo-overlay">
                    <div className="photo-content">
                      <span className="photo-category">{photo.category}</span>
                      <p className="photo-description">{photo.alt}</p>
                    </div>
                    <button 
                      className="view-btn"
                      aria-label={`View ${photo.alt} in fullscreen`}
                      onClick={() => {/* Add lightbox function here */}}
                    >
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="view-more">
            <Link to="/gallery" className="btn btn-outline">
              View Complete Gallery
              <svg className="arrow-icon" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <div className="kicker">Our Services</div>
            <h2>Complete Wedding Photography</h2>
            <p className="lead">
              From traditional rituals to modern celebrations, we offer comprehensive coverage.
            </p>
          </div>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">📸</div>
              <h3>Pre-Wedding Shoot</h3>
              <p>Romantic pre-wedding photoshoots at scenic locations across Maharashtra.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎨</div>
              <h3>Haldi & Mehndi</h3>
              <p>Vibrant coverage of traditional ceremonies with natural light photography.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">💒</div>
              <h3>Wedding Day</h3>
              <p>Complete coverage of all rituals from morning preparations to reception.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎥</div>
              <h3>Cinematic Video</h3>
              <p>Professional wedding films with drone shots and emotional storytelling.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}