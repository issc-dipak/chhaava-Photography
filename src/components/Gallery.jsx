import React, { useState } from "react";
import Lightbox from "../components/Lightbox";
import { Filter, ChevronDown } from "lucide-react";


const IMAGES = [
  // Weddings
  { 
    src: "https://wallpapercave.com/wp/wp8520281.jpg", 
    alt: "Wedding couple at sunset", 
    category: "Wedding",
    description: "Romantic sunset wedding photography"
  },
  { 
    src: "https://wallpapercave.com/wp/wp8520285.jpg", 
    alt: "Wedding vows exchange", 
    category: "Wedding",
    description: "Emotional vow exchange moment"
  },

  // Portrait
  { 
    src: "https://i.pinimg.com/originals/ee/11/08/ee1108fb095b1104e636e1e24b1b9de6.jpg", 
    alt: "Portrait of woman", 
    category: "Portrait",
    description: "Professional portrait photography"
  },
  { 
    src: "https://i.pinimg.com/736x/6e/16/ea/6e16eaa1f992a6def7ed84b13c3b043c.jpg", 
    alt: "Portrait of man", 
    category: "Portrait",
    description: "Corporate headshot photography"
  },

  // Nature
  { 
    src: "https://tse4.mm.bing.net/th/id/OIP.d1rbt64fIM7VFH7C-vPfxAHaE7?rs=1&pid=ImgDetMain&o=7&rm=3", 
    alt: "Mountain landscape", 
    category: "Nature",
    description: "Landscape photography in mountains"
  },
  { 
    src: "https://i.pinimg.com/originals/50/be/99/50be99e4b7038b9fbbefb0aecd152d8e.jpg", 
    alt: "Forest path", 
    category: "Nature",
    description: "Forest path with morning light"
  },

  // Events
  { 
    src: "https://www.focuzstudios.in/wp-content/uploads/2023/02/south-indian-wedding-photography-55.jpg", 
    alt: "Traditional wedding event", 
    category: "Events",
    description: "Traditional wedding ceremony"
  },
  { 
    src: "https://static.wixstatic.com/media/0c4de1_1bb653b03a7748b7a85aaef83af40469~mv2.jpg/v1/fill/w_1366,h_910,al_c/0c4de1_1bb653b03a7748b7a85aaef83af40469~mv2.jpg", 
    alt: "Conference audience", 
    category: "Events",
    description: "Corporate event photography"
  }
];

const categories = ["All", ...Array.from(new Set(IMAGES.map(i => i.category)))];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const filtered = IMAGES.filter(i => filter === "All" ? true : i.category === filter);

  function openLightbox(idx) {
    setStartIndex(idx);
    setLightboxOpen(true);
  }

  // Simulate loading more images
  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      // In real app, you would fetch more images here
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="gallery-page">
      <div className="container">
        <header className="gallery-header">
          <p className="kicker">Portfolio</p>
          <h1>Gallery</h1>
          <p className="lead">
            Click any image to view larger. Use the arrows or keyboard to navigate.
            Our collection showcases our best work across different photography styles.
          </p>
        </header>

        {/* Filter Section */}
        <div className="gallery__filters">
          <Filter size={16} />
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`gallery__filter ${filter === c ? "active" : ""}`}
              aria-pressed={filter === c}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        {filtered.length === 0 ? (
          <div className="gallery-empty">
            <div className="gallery-empty-icon">📷</div>
            <h3>No images found</h3>
            <p>Try selecting a different category or check back later.</p>
          </div>
        ) : (
          <>
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
                      openLightbox(filtered.indexOf(img));
                    }
                  }}
                  aria-label={`View ${img.alt} - ${img.category}`}
                >
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    loading="lazy"
                    onLoad={(e) => {
                      e.target.classList.add('loaded');
                    }}
                  />
                  <div className="gallery-meta">
                    <div className="gallery-category">{img.category}</div>
                    <div className="gallery-description">{img.description}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {filter === "All" && (
              <div className="gallery-load-more">
                <button
                  className={`load-more-btn ${loading ? 'loading' : ''}`}
                  onClick={handleLoadMore}
                  disabled={loading}
                >
                  {loading ? 'Loading...' : 'Load More'}
                  {!loading && <ChevronDown size={16} />}
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox 
          images={filtered} 
          startIndex={startIndex} 
          onClose={() => setLightboxOpen(false)} 
        />
      )}
    </section>
  );
}