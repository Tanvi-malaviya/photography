'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

// Helper component to animate each word
const AnimatedWords = ({ text, className = "" }) => {
  return (
    <span className={className}>
      {text.split(" ").map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: i * 0.15 }}
          className="inline-block mr-1"
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

export default function ArtStorySection() {
  return (
    <section className="relative bg-[var(--background)] py-12 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="
            text-4xl md:text-6xl lg:text-7xl
            text-[var(--foreground)]
            leading-tight
          ">
            <AnimatedWords text="The Art of" />
            <br />
            <AnimatedWords text="Storytelling" className="text-[var(--accent)] block" />
          </h2>

        <p className="mt-8 text-[var(--text-secondary)] text-lg max-w-md">
  <AnimatedWords text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
</p>

          {/* Stats */}
          <div className="mt-10 flex gap-10 text-sm uppercase tracking-widest">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.5 }}
            >
              <p className="text-3xl font-[var(--font-heading)] text-[var(--accent)]">150+</p>
              <p className="text-[var(--text-muted)] mt-2">Weddings Captured</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.5 }}
            >
              <p className="text-3xl font-[var(--font-heading)] text-[var(--accent)]">8+</p>
              <p className="text-[var(--text-muted)] mt-2">Years Experience</p>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT IMAGES STACK */}
        <div className="relative h-[500px]">

          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="absolute top-0 right-0 w-[70%] h-[70%] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/homehero.jpg"
              alt="Photography"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute bottom-0 left-0 w-[60%] h-[60%] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/homehero3.jpg"
              alt="Photography"
              fill
              className="object-cover"
            />
          </motion.div>

        </div>

      </div>

    </section>
  )
}
