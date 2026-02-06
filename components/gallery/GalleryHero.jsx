"use client";

import { motion } from "framer-motion";

export default function GalleryHero() {
  return (
    <section className="relative min-h-[95vh] overflow-hidden bg-[color:var(--color-surface)] px-6 flex items-center">

      {/* Background Image Strip */}
      <div className="absolute inset-0 flex">
        {[1, 2, 3].map((img, i) => (
          <motion.div
            key={i}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.25 }}
            transition={{ duration: 1.5, delay: i * 0.2 }}
            className="flex-1 overflow-hidden"
          >
            <img
              src={`/gallery${img}.jpg`} 
              alt="Gallery background"
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Grain Overlay (premium feel) */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/grain.png')] opacity-[0.05]" />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-5xl mx-auto text-center"
      >
        {/* Small Label */}
        <motion.span
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          animate={{ opacity: 1, letterSpacing: "0.3em" }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-6 text-sm text-black/50"
        >
          GALLERY
        </motion.span>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight">
          Stories Told <br />
          <span className="text-black/60">Through My Lens</span>
        </h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 max-w-2xl mx-auto text-lg text-black/60"
        >
          A curated collection of moments, emotions, and stories captured
          across weddings, portraits, fashion, and travel.
        </motion.p>

      
      </motion.div>
    </section>
  );
}
