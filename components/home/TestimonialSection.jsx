'use client'

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    text: "Every moment felt magical. They didn’t just capture photos — they captured emotions we’ll treasure forever.",
    name: "Aarav & Meera",
  },
  {
    text: "The experience was seamless, professional, and artistic. Our wedding album looks like a movie.",
    name: "Rohan Patel",
  },
  {
    text: "Their eye for detail and light is unreal. Truly cinematic storytelling.",
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
    <section className="relative bg-black py-32 overflow-hidden text-center">

      {/* Big Background Quote */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-white/5 text-[200px] font-serif select-none">
          ”
        </span>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-white text-2xl md:text-3xl leading-relaxed font-light">
              {testimonials[index].text}
            </p>

            <p className="mt-10 text-white/60 uppercase tracking-widest text-sm">
              — {testimonials[index].name}
            </p>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}
