'use client'

import { motion } from 'framer-motion'

export default function AboutPhilosophyLight() {
  return (
    <section className="relative bg-white py-16 sm:py-24 overflow-hidden">

      {/* ===== SOFT BACKGROUND ACCENT (DESKTOP ONLY) ===== */}
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: '100%' }}
        transition={{ duration: 1.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="absolute left-16 top-0 w-[2px] bg-[var(--accent)]/40 hidden lg:block"
      />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

        {/* ===== LEFT CONTENT ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-xs sm:text-sm tracking-widest uppercase text-[var(--accent)]">
            Our Philosophy
          </span>

          <h2 className="mt-5 sm:mt-6 text-3xl sm:text-4xl lg:text-6xl text-neutral-900 font-serif leading-tight">
            Stories shaped by <br className="hidden sm:block" /> purpose & emotion
          </h2>

          <p className="mt-6 sm:mt-8 text-base sm:text-lg text-neutral-600 max-w-xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
          </p>

          {/* Signature underline */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            transition={{ delay: 0.6, duration: 1 }}
            viewport={{ once: true }}
            className="mt-8 sm:mt-10 h-[2px] bg-[var(--accent)]"
          />
        </motion.div>

        {/* ===== RIGHT FLOATING CARDS ===== */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">

          {[
            {
              title: 'Emotion First',
              desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            {
              title: 'Light & Composition',
              desc: 'Sed do eiusmod tempor incididunt ut labore et dolore.',
            },
            {
              title: 'Natural Moments',
              desc: 'Ut enim ad minim veniam, quis nostrud exercitation.',
            },
            {
              title: 'Timeless Editing',
              desc: 'Duis aute irure dolor in reprehenderit in voluptate.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.15,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="
                bg-white
                border border-neutral-200
                rounded-2xl p-6 sm:p-8
                shadow-[0_20px_40px_rgba(0,0,0,0.06)]
              "
            >
              <h3 className="text-lg sm:text-xl font-semibold text-neutral-900">
                {item.title}
              </h3>
              <p className="mt-2 sm:mt-3 text-sm text-neutral-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}
