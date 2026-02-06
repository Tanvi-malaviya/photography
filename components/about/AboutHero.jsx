'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutHeroSection() {
  return (
   <section
  className="min-h-[100svh]"
  style={{
    paddingTop: 'calc(var(--nav-height) + env(safe-area-inset-top))',
  }}
>


      {/* ===== BACKGROUND IMAGE ===== */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <Image
          src="/abouthero.jpg"
          alt="About Background"
          fill
          priority
          className="object-cover object-center"
        />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* ===== REVEAL MASK ===== */}
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 1.6, ease: [0.77, 0, 0.18, 1] }}
        style={{ originX: 0 }}
        className="absolute inset-0 bg-black z-20"
      />

      {/* ===== CONTENT ===== */}
      <div
        style={{ paddingTop: 'env(safe-area-inset-top)' }}
        className="
          relative z-30
          min-h-[100svh]
          flex items-center
          px-4 sm:px-6
          pt-28 sm:pt-32 lg:pt-0
        "
      >
        <div
          className="
            max-w-6xl mx-auto
            grid grid-cols-1 lg:grid-cols-2
            gap-14 lg:gap-16
            items-center
          "
        >
          {/* ===== LEFT TEXT ===== */}
          <div className="text-center lg:text-left">

            {/* Tag */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="
                inline-block mb-5 sm:mb-6
                text-xs sm:text-sm
                tracking-widest
                text-white
                uppercase
              "
            >
              About Us
            </motion.span>

            {/* Title */}
            <h1
              className="
                text-white
                text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                leading-tight
                font-serif
                overflow-hidden
              "
            >
              {'We Create Stories'.split(' ').map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 120, opacity: 0, filter: 'blur(12px)' }}
                  animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                  transition={{
                    delay: 1.3 + i * 0.15,
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block mr-2 sm:mr-3"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.1, duration: 0.8 }}
              className="
                mt-6 sm:mt-8
                text-neutral-300
                text-base sm:text-lg
                max-w-xl
                mx-auto lg:mx-0
              "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </motion.p>

            {/* Accent Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ delay: 2.6, duration: 1 }}
              className="
                mt-8 sm:mt-10
                h-[2px]
                bg-[var(--accent)]
                mx-auto lg:mx-0
              "
            />
          </div>

          {/* ===== RIGHT IMAGE ===== */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 1 }}
            className="
              relative w-full
              h-[260px] sm:h-[340px] md:h-[420px]
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
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="
                absolute bottom-4 sm:bottom-6 left-4 sm:left-6
                bg-black/60 backdrop-blur-md
                text-white
                px-4 sm:px-5
                py-2.5 sm:py-3
                rounded-lg
                text-xs sm:text-sm
                tracking-wide
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
