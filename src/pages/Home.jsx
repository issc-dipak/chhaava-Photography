import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css"; 


// Premium Indian Wedding Images (HD Quality)
const INDIAN_WEDDING_PHOTOS = [
  {
    src: "https://images.pexels.com/photos/2486420/pexels-photo-2486420.jpeg",
    alt: "Indian Wedding Mehndi Ceremony",
    category: "mehndi"
  },
  {
    src: "https://images.pexels.com/photos/12899814/pexels-photo-12899814.jpeg",
    alt: "Indian Wedding Mehndi Ceremony",
    category: "mehndi"
  },
  {
    src: "https://images.pexels.com/photos/30708198/pexels-photo-30708198.jpeg",
    alt: "Indian Wedding Mehndi Ceremony",
    category: "mehndi"
  },
  {
    src: "https://images.pexels.com/photos/13624551/pexels-photo-13624551.jpeg",
    alt: "Indian Wedding Mehndi Ceremony",
    category: "mehndi"
  },
  {
    src: "https://images.pexels.com/photos/30931271/pexels-photo-30931271.jpeg",
    alt: "Indian Wedding Mehndi Ceremony",
    category: "mehndi"
  },
  {
    src: "https://images.pexels.com/photos/8431080/pexels-photo-8431080.jpeg",
    alt: "Indian Wedding Mehndi Ceremony",
    category: "mehndi"
  },
  {
    src: "https://images.pexels.com/photos/20736188/pexels-photo-20736188.jpeg",
    alt: "Indian Wedding Mehndi Ceremony",
    category: "mehndi"
  },
  {
    src: "https://images.pexels.com/photos/30868062/pexels-photo-30868062.jpeg",
    alt: "Indian Wedding Mehndi Ceremony",
    category: "mehndi"
  },
  {
    src: "https://images.pexels.com/photos/12995512/pexels-photo-12995512.jpeg",
    alt: "Traditional Indian Bride",
    category: "bridal"
  },
   {
    src: "https://images.pexels.com/photos/30589148/pexels-photo-30589148.jpeg",
    alt: "Traditional Indian Bride",
    category: "bridal"
  },
   {
    src: "https://images.pexels.com/photos/30589149/pexels-photo-30589149.jpeg",
    alt: "Traditional Indian Bride",
    category: "bridal"
  },
   {
    src: "https://images.pexels.com/photos/10773464/pexels-photo-10773464.jpeg",
    alt: "Traditional Indian Bride",
    category: "bridal"
  },
   {
    src: "https://images.pexels.com/photos/14639436/pexels-photo-14639436.jpeg",
    alt: "Traditional Indian Bride",
    category: "bridal"
  },
   {
    src: "https://images.pexels.com/photos/11171095/pexels-photo-11171095.jpeg",
    alt: "Traditional Indian Bride",
    category: "bridal"
  },
   {
    src: "https://images.pexels.com/photos/8751942/pexels-photo-8751942.jpeg",
    alt: "Traditional Indian Bride",
    category: "bridal"
  },
   {
    src: "https://images.pexels.com/photos/3872626/pexels-photo-3872626.jpeg",
    alt: "Traditional Indian Bride",
    category: "bridal"
  },
  {
    src: "https://images.pexels.com/photos/16314538/pexels-photo-16314538.jpeg",
    alt: "Indian Wedding Pheras",
    category: "wedding"
  },
  {
    src: "https://images.pexels.com/photos/30184675/pexels-photo-30184675.jpeg",
    alt: "Indian Wedding Pheras",
    category: "wedding"
  },
  {
    src: "https://images.pexels.com/photos/27876538/pexels-photo-27876538.jpeg",
    alt: "Indian Wedding Pheras",
    category: "wedding"
  },
  {
    src: "https://images.pexels.com/photos/27876531/pexels-photo-27876531.jpeg",
    alt: "Indian Wedding Pheras",
    category: "wedding"
  },
  {
    src: "https://images.pexels.com/photos/29890904/pexels-photo-29890904.jpeg",
    alt: "Indian Wedding Pheras",
    category: "wedding"
  },
  {
    src: "https://images.pexels.com/photos/26056318/pexels-photo-26056318.jpeg",
    alt: "Indian Wedding Pheras",
    category: "wedding"
  },
  {
    src: "https://images.pexels.com/photos/5491254/pexels-photo-5491254.jpeg",
    alt: "Indian Wedding Pheras",
    category: "wedding"
  },
  {
    src: "https://images.pexels.com/photos/30184615/pexels-photo-30184615.jpeg",
    alt: "Indian Wedding Pheras",
    category: "wedding"
  },
  {
    src: "https://images.pexels.com/photos/18897198/pexels-photo-18897198.jpeg",
    alt: "Indian Wedding Haldi Ceremony",
    category: "haldi"
  },
  {
    src: "https://images.pexels.com/photos/7153785/pexels-photo-7153785.jpeg",
    alt: "Indian Wedding Haldi Ceremony",
    category: "haldi"
  },
  {
    src: "https://images.pexels.com/photos/29496276/pexels-photo-29496276.jpeg",
    alt: "Indian Wedding Haldi Ceremony",
    category: "haldi"
  },
  {
    src: "https://images.pexels.com/photos/30706024/pexels-photo-30706024.jpeg",
    alt: "Indian Wedding Haldi Ceremony",
    category: "haldi"
  },
  {
    src: "https://images.pexels.com/photos/7153762/pexels-photo-7153762.jpeg",
    alt: "Indian Wedding Haldi Ceremony",
    category: "haldi"
  },
  {
    src: "https://images.pexels.com/photos/33786308/pexels-photo-33786308.jpeg",
    alt: "Indian Wedding Haldi Ceremony",
    category: "haldi"
  },
  {
    src: "https://images.pexels.com/photos/33078539/pexels-photo-33078539.jpeg",
    alt: "Indian Wedding Haldi Ceremony",
    category: "haldi"
  },
  {
    src: "https://images.pexels.com/photos/32325926/pexels-photo-32325926.jpeg",
    alt: "Indian Wedding Haldi Ceremony",
    category: "haldi"
  },
  
  {
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Indian Wedding Sangeet",
    category: "sangeet"
  },
 
  {
    src: "https://images.pexels.com/photos/33885314/pexels-photo-33885314.jpeg",
    alt: "Indian Wedding Family Portraits",
    category: "family"
  },
  {
    src: "https://images.pexels.com/photos/33885305/pexels-photo-33885305.jpeg",
    alt: "Indian Wedding Family Portraits",
    category: "family"
  },
  {
    src: "https://images.pexels.com/photos/33885302/pexels-photo-33885302.jpeg",
    alt: "Indian Wedding Family Portraits",
    category: "family"
  },
  {
    src: "https://images.pexels.com/photos/33885303/pexels-photo-33885303.jpeg",
    alt: "Indian Wedding Family Portraits",
    category: "family"
  },
  {
    src: "https://images.pexels.com/photos/35267196/pexels-photo-35267196.jpeg",
    alt: "Indian Wedding Family Portraits",
    category: "family"
  },
  {
    src: "https://images.pexels.com/photos/14051007/pexels-photo-14051007.jpeg",
    alt: "Indian Wedding Family Portraits",
    category: "family"
  },
  {
    src: "https://images.pexels.com/photos/34479822/pexels-photo-34479822.jpeg",
    alt: "Indian Wedding Family Portraits",
    category: "family"
  },
  
  {
    src: "https://images.pexels.com/photos/35267194/pexels-photo-35267194.jpeg",
    alt: "Indian Wedding Family Portraits",
    category: "family"
  },
  {
    src: "https://images.unsplash.com/photo-1600586113610-e7337d5d63f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Indian Wedding Venue",
    category: "venue"
  },
  {
    src: "https://images.pexels.com/photos/15026762/pexels-photo-15026762.jpeg",
    alt: "Indian Wedding Candid Moments",
    category: "candid"
  },
  {
    src: "https://images.pexels.com/photos/15026763/pexels-photo-15026763.jpeg",
    alt: "Indian Wedding Candid Moments",
    category: "candid"
  },
   {
    src: "https://images.pexels.com/photos/17657670/pexels-photo-17657670.jpeg",
    alt: "Indian Wedding Candid Moments",
    category: "candid"
  },
  {
    src: "https://images.pexels.com/photos/17548722/pexels-photo-17548722.jpeg",
    alt: "Indian Wedding Candid Moments",
    category: "candid"
  },
  {
    src: "https://images.pexels.com/photos/31567827/pexels-photo-31567827.jpeg",
    alt: "Indian Wedding Candid Moments",
    category: "candid"
  },
  {
    src: "https://images.pexels.com/photos/31580615/pexels-photo-31580615.jpeg",
    alt: "Indian Wedding Candid Moments",
    category: "candid"
  },
   {
    src: "https://images.pexels.com/photos/15099755/pexels-photo-15099755.jpeg",
    alt: "Indian Wedding Candid Moments",
    category: "candid"
  },
  {
    src: "https://images.pexels.com/photos/33078538/pexels-photo-33078538.jpeg",
    alt: "Indian Wedding Candid Moments",
    category: "candid"
  },
  {
    src: "https://images.pexels.com/photos/29816039/pexels-photo-29816039.jpeg",
    alt: "Indian Wedding Grand Finale",
    category: "sangeet"
  },
  {
    src: "https://images.pexels.com/photos/33118018/pexels-photo-33118018.jpeg",
    alt: "Indian Wedding Grand Finale",
    category: "sangeet"
  },
  {
    src: "https://images.pexels.com/photos/28074356/pexels-photo-28074356.jpeg",
    alt: "Indian Wedding Grand Finale",
    category: "sangeet"
  },
  {
    src: "https://images.pexels.com/photos/31832650/pexels-photo-31832650.jpeg",
    alt: "Indian Wedding Grand Finale",
    category: "sangeet"
  },
  {
    src: "https://images.pexels.com/photos/34540656/pexels-photo-34540656.jpeg",
    alt: "Indian Wedding Grand Finale",
    category: "sangeet"
  },
  {
    src: "https://images.pexels.com/photos/34540655/pexels-photo-34540655.jpeg",
    alt: "Indian Wedding Grand Finale",
    category: "sangeet"
  },
  {
    src: "https://images.pexels.com/photos/14819939/pexels-photo-14819939.jpeg",
    alt: "Indian Wedding Grand Finale",
    category: "sangeet"
  },
  
  {
    src: "https://images.pexels.com/photos/35354285/pexels-photo-35354285.jpeg",
    alt: "Indian Wedding Grand Finale",
    category: "sangeet"
  },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isAutoScroll, setIsAutoScroll] = useState(true);

  const categories = [
    "all", "mehndi", "bridal", "wedding", "haldi", 
    "sangeet",  "family", "candid",
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
    <>
      {/* Hero Section with Video Background */}
      <section className="hero">
        <div className="hero-video" aria-hidden="true">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            poster="https://images.pexels.com/photos/29967503/pexels-photo-29967503.jpeg"
          >
            <source 
              src="https://assets.mixkit.co/videos/preview/mixkit-indian-wedding-couple-43222-large.mp4" 
              type="video/mp4" 
            />
          </video>
          <div className="video-overlay"></div>
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
            <Link to="/portfolio" className="btn btn-primary">
              <span>View Our Portfolio</span>
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
        
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
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
            <Link to="/portfolio" className="btn btn-outline">
              View Complete Portfolio
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
    </>
  );
}