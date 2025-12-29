import React, { useState } from "react";
import Gallery from "../components/Gallery";
import "../styles/portfolio.css"; 


/* Replace these with your real images */
const ALL_IMAGES = [
  { src: "/assets/wedding-1.jpg", alt: "Wedding 1", category: "wedding" },
  { src: "/assets/portrait-1.jpg", alt: "Portrait 1", category: "portrait" },
  { src: "/assets/product-1.jpg", alt: "Product 1", category: "product" },
  { src: "/assets/fashion-1.jpg", alt: "Fashion 1", category: "fashion" },
  { src: "/assets/drone-1.jpg", alt: "Drone 1", category: "drone" },
];

const CATEGORIES = ["all", "wedding", "portrait", "product", "fashion", ];

export default function Portfolio() {
  const [category, setCategory] = useState("all");
  const images = category === "all" ? ALL_IMAGES : ALL_IMAGES.filter((i) => i.category === category);

  return (
    <section className="portfolio section">
      <div className="container portfolio__inner">
        <h1 className="portfolio__title">Portfolio</h1>

        <div className="portfolio__filters" role="tablist" aria-label="Portfolio categories">
          {CATEGORIES.map((c) => {
            const isActive = category === c;
            return (
              <button
                key={c}
                type="button"
                className={`portfolio__filter${isActive ? " active" : ""}`}
                aria-pressed={isActive}
                onClick={() => setCategory(c)}
              >
                {c[0].toUpperCase() + c.slice(1)}
              </button>
            );
          })}
        </div>

        <div className="portfolio__gallery">
          <Gallery images={images} columns={3} />
        </div>
      </div>
    </section>
  );
}