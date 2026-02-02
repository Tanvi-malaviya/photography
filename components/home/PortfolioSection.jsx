'use client'

import { useState } from "react"
import { motion } from "framer-motion"

const portfolioImages = [
  "/homehero.jpg",
  "/homehero2.jpg",
  "/homehero3.jpg",
  "/homehero4.jfif",
  "/homehero.jpg",
  "/homehero2.jpg",
]

export default function EditorialPortfolio() {
  const [selected, setSelected] = useState(null)

  return (
    <section className="relative bg-black py-20 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-16 items-start">

        {/* LEFT SIDE BIG VERTICAL TITLE */}
        <div className="sticky top-32 h-fit">
          <motion.h2
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-white text-6xl md:text-7xl font-bold leading-tight"
          >
            Cinematic
            <span className="block text-white/30">
              Portfolio
            </span>
          </motion.h2>

          <p className="text-white/50 mt-6 max-w-xs">
            A curated collection of emotional frames,
            light, texture and timeless storytelling.
          </p>
        </div>

        {/* RIGHT SIDE MASONRY GRID */}
        <div className="lg:col-span-2 columns-1 sm:columns-2 gap-6 space-y-6">

          {portfolioImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative break-inside-avoid cursor-pointer group overflow-hidden rounded-2xl"
              onClick={() => setSelected(src)}
            >
              <img
                src={src}
                className="w-full object-cover rounded-2xl transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500" />
            </motion.div>
          ))}

        </div>
      </div>

      {/* LIGHTBOX */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-6"
          onClick={() => setSelected(null)}
        >
          <img
            src={selected}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl"
          />
        </div>
      )}

    </section>
  )
}
