'use client'

import { motion } from "framer-motion"

export default function CallToActionSection() {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/homehero3.jpg"
          alt="CTA Background"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 text-center px-4 sm:px-6"
      >
        <h2 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
          Let’s Create
          <span className="block text-[var(--accent)]">
            Something Timeless
          </span>
        </h2>

        <p className="mt-4 sm:mt-6 md:mt-8 text-white/70 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="mt-8 sm:mt-10 md:mt-12">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-background text-black font-semibold rounded-full tracking-wider uppercase text-sm sm:text-base transition duration-300 hover:shadow-2xl"
          >
            Book Your Session
          </motion.button>
        </div>
      </motion.div>

    </section>
  )
}
