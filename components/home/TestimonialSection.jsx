'use client'

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Aarav & Meera",
  },
  {
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Rohan Patel",
  },
  {
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    name: "Priya Shah",
  },
]

export default function TestimonialSection() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-20 sm:py-24 md:py-32 bg-[var(--background)] overflow-hidden">

      {/* Heading */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center mb-12 sm:mb-16 md:mb-20">
        <p className="tracking-widest text-xs sm:text-sm uppercase text-[var(--text-secondary)]">
          Client Words
        </p>

        <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--foreground)]">
          What Our Clients Feel
        </h2>
      </div>

      {/* Soft Background Quote */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[140px] sm:text-[180px] md:text-[220px] font-serif text-[var(--foreground)]/5 select-none">
          ”
        </span>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.7 }}
            className="
              rounded-2xl sm:rounded-3xl
              px-6 sm:px-10 md:px-16
              py-8 sm:py-10 md:py-14
              bg-white/70 backdrop-blur-xl
              border border-[var(--foreground)]/10
              shadow-[0_40px_120px_-40px_rgba(0,0,0,0.15)]
            "
          >
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed font-light text-[var(--foreground)]">
              {testimonials[index].text}
            </p>

            <p className="mt-6 sm:mt-8 md:mt-10 uppercase tracking-widest text-xs sm:text-sm text-[var(--text-secondary)]">
              — {testimonials[index].name}
            </p>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}
