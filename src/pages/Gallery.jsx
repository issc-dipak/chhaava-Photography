import React from "react";
import "../styles/gallery.css"; 

const IMAGES = [
  // Weddings
  { src: "https://wallpapercave.com/wp/wp8520281.jpg", alt: "Wedding couple", category: "Wedding" },
  { src: "https://wallpapercave.com/wp/wp8520285.jpg", alt: "Wedding vows", category: "Wedding" },

  // Portrait
  { src: "https://i.pinimg.com/originals/ee/11/08/ee1108fb095b1104e636e1e24b1b9de6.jpg", alt: "Portrait woman", category: "Portrait" },
  { src: "https://i.pinimg.com/736x/6e/16/ea/6e16eaa1f992a6def7ed84b13c3b043c.jpg", alt: "Portrait man", category: "Portrait" },

  // Nature
  { src: "https://tse4.mm.bing.net/th/id/OIP.d1rbt64fIM7VFH7C-vPfxAHaE7?rs=1&pid=ImgDetMain&o=7&rm=3", alt: "Mountain landscape", category: "Nature" },
  { src: "https://i.pinimg.com/originals/50/be/99/50be99e4b7038b9fbbefb0aecd152d8e.jpg", alt: "Forest path", category: "Nature" },

  // Events
  { src: "https://www.focuzstudios.in/wp-content/uploads/2023/02/south-indian-wedding-photography-55.jpg", alt: "Music event", category: "Events" },
  { src: "https://static.wixstatic.com/media/0c4de1_1bb653b03a7748b7a85aaef83af40469~mv2.jpg/v1/fill/w_1366,h_910,al_c/0c4de1_1bb653b03a7748b7a85aaef83af40469~mv2.jpg", alt: "Conference crowd", category: "Events" }
];

const categories = ["All", ...Array.from(new Set(IMAGES.map(i => i.category)))];

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
          <div className="kicker">Portfolio</div>
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
                onClick={() => openLightbox(IMAGES.indexOf(img))}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") openLightbox(IMAGES.indexOf(img)); }}
              >
                <img src={img.src} alt={img.alt} loading="lazy" />
                <div className="meta">{img.category}</div>
              </div>
            ))}
          </div>
        </div>

        {lightboxOpen && (
          <Lightbox images={IMAGES} startIndex={startIndex} onClose={() => setLightboxOpen(false)} />
        )}
      </section>
    </div>
  );
}