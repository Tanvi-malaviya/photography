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
    <section className="relative bg-black py-16 sm:py-20 md:py-28 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">

        {/* LEFT SIDE TITLE */}
        <div className="lg:sticky lg:top-32 h-fit">
          <motion.h2
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            Cinematic
            <span className="block text-white/30">
              Portfolio
            </span>
          </motion.h2>

          <p className="text-white/50 mt-4 sm:mt-6 max-w-sm text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* RIGHT SIDE MASONRY GRID */}
        <div className="lg:col-span-2 columns-1 sm:columns-2 gap-4 sm:gap-6 space-y-4 sm:space-y-6">

          {portfolioImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative break-inside-avoid cursor-pointer group overflow-hidden rounded-xl sm:rounded-2xl"
              onClick={() => setSelected(src)}
            >
              <img
                src={src}
                alt=""
                className="w-full object-cover rounded-xl sm:rounded-2xl transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500" />
            </motion.div>
          ))}

        </div>
      </div>

      {/* LIGHTBOX */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4 sm:p-6"
          onClick={() => setSelected(null)}
        >
          <img
            src={selected}
            alt=""
            className="max-h-[85vh] sm:max-h-[90vh] max-w-[90vw] object-contain rounded-lg sm:rounded-xl"
          />
        </div>
      )}

    </section>
  )
}
