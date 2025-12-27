import React, { useEffect } from "react";

export default function Lightbox({ images = [], startIndex = 0, onClose }) {
  const [index, setIndex] = React.useState(startIndex);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + images.length) % images.length);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [images.length, onClose]);

  if (!images || images.length === 0) return null;

  return (
    <div className="lightbox-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="lightbox" onClick={(e) => e.stopPropagation()}>
        <button className="prev" onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)} aria-label="Previous">
          ◀
        </button>
        <img src={images[index].src} alt={images[index].alt || `Image ${index + 1}`} />
        <button className="next" onClick={() => setIndex((i) => (i + 1) % images.length)} aria-label="Next">
          ▶
        </button>
        <button className="close" onClick={onClose} aria-label="Close">✕</button>
      </div>
    </div>
  );
}