import React from "react";
import "../styles/gallery.css"; 

// Import images from your local assets folder
// Make sure these images exist in your public/assets/ or src/assets/ folder

// Update these paths according to your project structure
// If images are in public/assets/, use paths like "/assets/wedding1.jpg"
// If images are in src/assets/, import them directly

// For public/assets/ structure:
const IMAGES = [
  // Weddings
  { src: "/assets/gallery/wedding.jpg", alt:"Wedding image", category: "Wedding" },
  { src: "/assets/gallery/wedding1.jpg", alt:" gallery image", category: "Wedding" },
  { src: "/assets/gallery/wedding2.jpg", alt:" gallery image", category: "Wedding" },
  { src: "/assets/gallery/wedding3.jpg", alt:" gallery image", category: "Wedding" },
  { src: "/assets/gallery/wedding4.jpg", alt:" gallery image", category: "Wedding" },
  { src: "/assets/gallery/wedding5.jpg", alt:" gallery image", category: "Wedding" },
  { src: "/assets/gallery/wedding6.jpg", alt:" gallery image", category: "Wedding" },
  { src: "/assets/gallery/wedding7.jpg", alt:" gallery image", category: "Wedding" },
  { src: "/assets/gallery/wedding8.jpg", alt:" gallery image", category: "Wedding" },
  { src: "/assets/gallery/wedding9.jpg", alt:" gallery image", category: "Wedding" },
  { src: "/assets/gallery/wedding10.jpeg", alt:" gallery image", category: "Wedding" },
  { src: "/assets/gallery/wedding11.jpeg", alt:" gallery image", category: "Wedding" },
  { src: "/assets/gallery/wedding12.jpeg", alt:" gallery image", category: "Wedding" },
  { src: "/assets/gallery/wedding13.jpg", alt: "Wedding vows", category: "Wedding" },
  { src: "/assets/gallery/wedding13.jpg", alt: "Wedding vows", category: "Wedding" },

  // Portrait
   { src: "/assets/gallery/portrait.jpg", alt: "Portrait man", category: "Portrait" },
  { src: "/assets/gallery/portrait1.jpg", alt: "Portrait man", category: "Portrait" },
  { src: "/assets/gallery/portrait2.jpg", alt: "Portrait man", category: "Portrait" },
  { src: "/assets/gallery/portrait3.jpg", alt: "Portrait man", category: "Portrait" },
  { src: "/assets/gallery/portrait4.jpg", alt: "Portrait man", category: "Portrait" },
  { src: "/assets/gallery/portrait5.jpg", alt: "Portrait man", category: "Portrait" },
{ src: "/assets/gallery/portrait6.jpg", alt: "Portrait woman", category: "Portrait" },
{ src: "/assets/gallery/portrait7.jpg", alt: "Portrait woman", category: "Portrait" },
{ src: "/assets/gallery/portrait8.jpg", alt: "Portrait woman", category: "Portrait" },
{ src: "/assets/gallery/portrait9.jpg", alt: "Portrait woman", category: "Portrait" },
{ src: "/assets/gallery/portrait10.jpg", alt: "Portrait woman", category: "Portrait" },
 { src: "/assets/gallery/portrait11.jpg", alt: "Portrait woman", category: "Portrait" },

  // Nature
  { src: "/assets/gallery/nature.jpg", alt: "Nature", category: "Nature" },
  { src: "/assets/gallery/nature1.jpg", alt: "Nature ", category: "Nature" },
{ src: "/assets/gallery/nature2.jpg", alt: "Nature ", category: "Nature" },
{ src: "/assets/gallery/nature3.jpg", alt: "Nature ", category: "Nature" },
{ src: "/assets/gallery/nature4.jpg", alt: "Nature ", category: "Nature" },
{ src: "/assets/gallery/nature5.jpg", alt: "Nature ", category: "Nature" },
{ src: "/assets/gallery/nature6.jpg", alt: "Nature ", category: "Nature" },
{ src: "/assets/gallery/nature7.jpg", alt: "Nature ", category: "Nature" },
{ src: "/assets/gallery/nature8.jpg", alt: "Nature ", category: "Nature" },
{ src: "/assets/gallery/nature9.jpg", alt: "Nature ", category: "Nature" },
{ src: "/assets/gallery/nature10.jpg", alt: "Nature ", category: "Nature" },


  // Events
  { src: "/assets/gallery/event1.jpg", alt: " event", category: "Events" },
  { src: "/assets/gallery/event2.jpg", alt: " event", category: "Events" },
  { src: "/assets/gallery/event3.jpg", alt: " event", category: "Events" },
  { src: "/assets/gallery/event4.jpg", alt: " event", category: "Events" },
  { src: "/assets/gallery/event.jpg", alt: " event", category: "Events" },
];

// OR if using src/assets/ with imports:
/*
import wedding1 from "../assets/gallery/wedding1.jpg";
import wedding2 from "../assets/gallery/wedding2.jpg";
import portrait1 from "../assets/gallery/portrait1.jpg";
import portrait2 from "../assets/gallery/portrait2.jpg";
import nature1 from "../assets/gallery/nature1.jpg";
import nature2 from "../assets/gallery/nature2.jpg";
import event1 from "../assets/gallery/event1.jpg";
import event2 from "../assets/gallery/event2.jpg";

const IMAGES = [
  // Weddings
  { src: wedding1, alt: "Wedding couple", category: "Wedding" },
  { src: wedding2, alt: "Wedding vows", category: "Wedding" },

  // Portrait
  { src: portrait1, alt: "Portrait woman", category: "Portrait" },
  { src: portrait2, alt: "Portrait man", category: "Portrait" },

  // Nature
  { src: nature1, alt: "Mountain landscape", category: "Nature" },
  { src: nature2, alt: "Forest path", category: "Nature" },

  // Events
  { src: event1, alt: "Music event", category: "Events" },
  { src: event2, alt: "Conference crowd", category: "Events" }
];
*/

const categories = ["All", ...Array.from(new Set(IMAGES.map(i => i.category)))];

// Simple Lightbox Component
function Lightbox({ images, startIndex, onClose }) {
  const [currentIndex, setCurrentIndex] = React.useState(startIndex);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose} aria-label="Close lightbox">
          &times;
        </button>
        
        <button className="lightbox-nav prev" onClick={handlePrev} aria-label="Previous image">
          &larr;
        </button>
        
        <div className="lightbox-image-container">
          <img 
            src={images[currentIndex].src} 
            alt={images[currentIndex].alt} 
            className="lightbox-image"
          />
          <div className="lightbox-caption">
            <div className="lightbox-title">{images[currentIndex].alt}</div>
            <div className="lightbox-counter">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
        
        <button className="lightbox-nav next" onClick={handleNext} aria-label="Next image">
          &rarr;
        </button>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [filter, setFilter] = React.useState("All");
  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const [startIndex, setStartIndex] = React.useState(0);

  const filtered = IMAGES.filter(i => filter === "All" ? true : i.category === filter);

  function openLightbox(idx) {
    setStartIndex(idx);
    setLightboxOpen(true);
  }

  return (
    <div className="gallery-page">
      <section className="section">
        <div className="container">
          <h2>Gallery</h2>
          <p className="lead">Click any image to view larger. Use the arrows or keyboard to navigate.</p>

          <div className="gallery__filters">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`btn gallery__filter${filter === c ? " active" : ""}`}
                aria-pressed={filter === c}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filtered.map((img, i) => (
              <div
                key={i}
                className="gallery-item"
                onClick={() => openLightbox(filtered.indexOf(img))}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { 
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openLightbox(filtered.indexOf(img));
                  }
                }}
              >
                <img src={img.src} alt={img.alt} loading="lazy" />
                <div className="meta">{img.category}</div>
              </div>
            ))}
          </div>
        </div>

        {lightboxOpen && (
          <Lightbox images={filtered} startIndex={startIndex} onClose={() => setLightboxOpen(false)} />
        )}
      </section>
    </div>
  );
}