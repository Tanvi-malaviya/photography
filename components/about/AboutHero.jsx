'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutHeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        paddingTop: 'var(--nav-height)',
      }}
    >
      {/* ===== BACKGROUND IMAGE ===== */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: 'easeOut' }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src="/abouthero.jpg"
          alt="About Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      {/* ===== CONTENT WRAPPER ===== */}
      <div
        className="
          min-h-[calc(100svh-var(--nav-height))]
          flex items-center
          px-4 sm:px-6
          py-24 sm:py-28
        "
      >
        <div
          className="
            max-w-6xl mx-auto
            grid grid-cols-1 lg:grid-cols-2
            gap-12 lg:gap-16
            items-center
          "
        >
          {/* ===== LEFT TEXT ===== */}
          <div className="text-center lg:text-left">

            {/* Tag */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="
                inline-block mb-5
                text-xs tracking-widest
                text-white uppercase
              "
            >
              About Us
            </motion.span>

            {/* Title */}
            <h1
              className="
                text-white
                text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                leading-tight font-serif
              "
            >
              {'We Create Stories'.split(' ').map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: i * 0.15,
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="
                mt-6
                text-neutral-300
                text-base sm:text-lg
                max-w-xl
                mx-auto lg:mx-0
              "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </motion.p>

            {/* Accent line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="
                mt-8
                h-[2px]
                bg-[var(--accent)]
                mx-auto lg:mx-0
              "
            />
          </div>

          {/* ===== RIGHT IMAGE ===== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="
              relative w-full
              h-[240px] sm:h-[320px] md:h-[420px]
              rounded-2xl
              overflow-hidden
              shadow-2xl
            "
          >
            <Image
              src="/abouthero2.jpg"
              alt="Our Vision"
              fill
              className="object-cover"
            />

            {/* Floating Label */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="
                absolute bottom-4 left-4
                bg-black/60 backdrop-blur
                text-white
                px-4 py-2
                rounded-lg
                text-xs tracking-wide
              "
            >
              Crafted with Purpose
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}