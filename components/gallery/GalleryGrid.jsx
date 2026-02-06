"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ---------------- CATEGORIES ---------------- */
const categories = [
  "All",
  "Weddings",
  "Portraits",
  "Pre-Wedding",
  "Fashion",
  "Travel",
];

/* ---------------- IMAGES ---------------- */
const images = [
  { id: 1, src: "/gallery1.jpg", category: "Weddings", title: "Riya & Aarav" },
  { id: 2, src: "/gallery2.jpg", category: "Weddings", title: "Jaipur Wedding" },
  { id: 3, src: "/gallery3.jpg", category: "Portraits", title: "Natural Light" },
  { id: 4, src: "/gallery1.jpg", category: "Pre-Wedding", title: "Sunset Love" },
  { id: 5, src: "/gallery2.jpg", category: "Fashion", title: "Studio Editorial" },
  { id: 6, src: "/gallery3.jpg", category: "Travel", title: "Mountains" },
  { id: 7, src: "/gallery1.jpg", category: "Portraits", title: "Soft Mood" },
  { id: 8, src: "/gallery2.jpg", category: "Pre-Wedding", title: "Beach Walk" },
];

export default function GalleryGrid() {
  const [active, setActive] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered =
    active === "All"
      ? images
      : images.filter((img) => img.category === active);

  /* ---------------- KEYBOARD SUPPORT ---------------- */
  useEffect(() => {
    const handleKey = (e) => {
      if (lightboxIndex === null) return;

      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight")
        setLightboxIndex((prev) => (prev + 1) % filtered.length);
      if (e.key === "ArrowLeft")
        setLightboxIndex(
          (prev) => (prev - 1 + filtered.length) % filtered.length
        );
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, filtered.length]);

  return (
    <section className="relative py-32 bg-white px-6">
      <div className="max-w-7xl mx-auto">

        {/* ---------------- FILTER ---------------- */}
        <div className="flex flex-wrap justify-center gap-8 mb-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`relative text-sm tracking-wide transition
                ${active === cat ? "text-black" : "text-black/50 hover:text-black"}
              `}
            >
              {cat}
              {active === cat && (
                <motion.span
                  layoutId="galleryUnderline"
                  className="absolute -bottom-2 left-0 w-full h-[2px] bg-black"
                />
              )}
            </button>
          ))}
        </div>

        {/* ---------------- GRID ---------------- */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence>
            {filtered.map((img, index) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                onClick={() => setLightboxIndex(index)}
                className="relative group overflow-hidden rounded-2xl cursor-pointer break-inside-avoid"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-end">
                  <div className="p-6">
                    <p className="text-white/80 text-sm">
                      {img.category}
                    </p>
                    <h4 className="text-white text-lg font-medium">
                      {img.title}
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ---------------- LIGHTBOX ---------------- */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 text-white text-3xl"
            >
              ✕
            </button>

            {/* Prev */}
            <button
              onClick={() =>
                setLightboxIndex(
                  (lightboxIndex - 1 + filtered.length) % filtered.length
                )
              }
              className="absolute left-6 text-white text-4xl"
            >
              ‹
            </button>

            {/* Next */}
            <button
              onClick={() =>
                setLightboxIndex((lightboxIndex + 1) % filtered.length)
              }
              className="absolute right-6 text-white text-4xl"
            >
              ›
            </button>

            {/* Image */}
            <motion.img
              key={filtered[lightboxIndex].id}
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].title}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, info) => {
                if (info.offset.x < -100)
                  setLightboxIndex((lightboxIndex + 1) % filtered.length);
                if (info.offset.x > 100)
                  setLightboxIndex(
                    (lightboxIndex - 1 + filtered.length) % filtered.length
                  );
              }}
            />

            {/* Caption */}
            <div className="absolute bottom-10 text-center text-white/70 text-sm">
              {filtered[lightboxIndex].title} —{" "}
              {filtered[lightboxIndex].category}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
