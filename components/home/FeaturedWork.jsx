'use client'

import { motion } from 'framer-motion'

const works = [
  {
    title: 'Royal Wedding',
    category: 'Wedding Photography',
    image: '/homehero.jpg',
  },
  {
    title: 'Urban Portrait',
    category: 'Portrait Session',
    image: '/homehero2.jpg',
  },
  {
    title: 'Corporate Event',
    category: 'Event Coverage',
    image: '/homehero3.jpg',
  },
]

export default function FeaturedWork() {
  return (
    <section className="relative bg-[var(--background)] py-16 sm:py-20 md:py-28 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-14 sm:mb-16 md:mb-20"
        >
          <p className="text-xs sm:text-sm tracking-widest text-[var(--text-secondary)]">
            FEATURED WORK
          </p>

          <h2 className="mt-4 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--foreground)] leading-tight">
            Selected Projects
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {works.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl"
            >
              {/* Image */}
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-[260px] sm:h-[320px] md:h-[420px] object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 translate-y-4 sm:translate-y-6 opacity-100 sm:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
                <p className="text-xs sm:text-sm text-white/70">
                  {work.category}
                </p>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mt-1">
                  {work.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-14 md:mt-20"
        >
          <a
            href="/portfolio"
            className="inline-flex items-center gap-4 text-base sm:text-lg font-semibold text-[var(--foreground)] group"
          >
            <span>View Full Portfolio</span>
            <span className="w-10 sm:w-12 h-px bg-[var(--foreground)] group-hover:w-20 sm:group-hover:w-24 transition-all duration-500" />
          </a>
        </motion.div>

      </div>
    </section>
  )
}
