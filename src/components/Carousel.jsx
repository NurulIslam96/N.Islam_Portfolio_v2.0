import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Carousel({ images, alt }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  if (!images || images.length === 0) return null;

  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };
  const next = () => {
    setDirection(1);
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };
  const goTo = (i) => {
    setDirection(i > index ? 1 : -1);
    setIndex(i);
  };

  return (
    <div className="carousel">
      <div className="carousel-frame">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.img
            key={index}
            src={images[index]}
            alt={alt + " screenshot " + (index + 1)}
            className="carousel-img"
            custom={direction}
            initial={(dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 })}
            animate={{ opacity: 1, x: 0 }}
            exit={(dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60 })}
            transition={{ duration: 0.35, ease: [0.2, 0.8, 0.3, 1] }}
          />
        </AnimatePresence>
        {images.length > 1 && (
          <>
            <button className="carousel-arrow left" onClick={prev} aria-label="Previous image">
              ‹
            </button>
            <button className="carousel-arrow right" onClick={next} aria-label="Next image">
              ›
            </button>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div className="carousel-dots">
          {images.map((_, i) => (
            <button
              key={i}
              className={"carousel-dot" + (i === index ? " active" : "")}
              onClick={() => goTo(i)}
              aria-label={"Go to image " + (i + 1)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
