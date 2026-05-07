import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";


const Carousel = ({
  items = [],
  autoPlay = true,
  interval = 4000,
  type = "testimonial",
}) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback((index, dir = 1) => {
    setDirection(dir);
    setCurrent(index);
  }, []);

  const next = useCallback(
    () => goTo((current + 1) % items.length, 1),
    [current, items.length, goTo],
  );

  const prev = useCallback(
    () => goTo((current - 1 + items.length) % items.length, -1),
    [current, items.length, goTo],
  );

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, next]);

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <div
      className="relative overflow-hidden"
      role="region"
      aria-label="Carousel"
    >
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          {type === "testimonial" ? (
            <div className="bg-[#1a2e45] rounded-xl p-8 text-center max-w-2xl mx-auto">
              {items[current]?.avatar && (
                <img
                  src={items[current].avatar}
                  alt=""
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover border-2 border-[#c96442]"
                />
              )}
              <p className="text-[#e8d5b7] text-lg italic font-['Cormorant_Garamond'] mb-4">
                "{items[current]?.quote}"
              </p>
              <p className="text-[#c96442] font-semibold text-sm">
                {items[current]?.name}
              </p>
              <p className="text-[#9bb0c5] text-xs">
                {items[current]?.location}
              </p>
            </div>
          ) : (
            <img
              src={items[current]?.src}
              alt={items[current]?.alt || ""}
              className="w-full h-72 object-cover rounded-xl"
            />
          )}
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prev}
        aria-label="Previous"
        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0d1b2a]/80 text-[#e8d5b7] hover:bg-[#c96442] transition-colors flex items-center justify-center"
      >
        ‹
      </button>
      <button
        onClick={next}
        aria-label="Next"
        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0d1b2a]/80 text-[#e8d5b7] hover:bg-[#c96442] transition-colors flex items-center justify-center"
      >
        ›
      </button>

      <div className="flex justify-center gap-2 mt-4">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > current ? 1 : -1)}
            aria-label={`Slide ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-[#c96442] w-5" : "bg-[#243b55]"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
