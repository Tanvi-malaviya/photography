'use client'

import { motion } from 'framer-motion'

// Helper to animate each word
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
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.19 }}
          className="inline-block mr-1"
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

export default function WhyChooseSection() {
  return (
    <section className="relative bg-[var(--foreground)] py-24 overflow-hidden">

      {/* === Background Accent Shapes === */}
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-[var(--accent)] opacity-20 rounded-full -z-10 animate-bounce-slow" />
      <div className="absolute bottom-0 right-1/4 w-[200px] h-[200px] bg-[var(--accent)] opacity-15 rounded-full -z-10 animate-bounce-slow" />

      {/* === Floating Icons === */}
      <motion.div
        className="absolute top-10 left-10 text-[var(--accent)] text-2xl"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >📷</motion.div>

      <motion.div
        className="absolute top-32 right-20 text-[var(--accent)] text-2xl"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3.5, repeat: Infinity }}
      >✨</motion.div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-4xl md:text-6xl lg:text-7xl text-[var(--background)] leading-tight">
            <AnimatedWords text="Why Choose" />
            <br />
            <AnimatedWords text="Our Photography" className="text-[var(--accent)] block" />
          </h2>

          <p className="mt-8 text-[var(--background)] text-lg max-w-md">
            <AnimatedWords text="We capture not just moments, but the emotions behind them. Our approach ensures every memory is preserved with care, creativity, and passion." />
          </p>

          {/* Features */}
          <div className="mt-10 flex flex-col gap-6 text-[var(--background)]">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <div className="text-[var(--accent)] font-bold text-2xl">✔</div>
              <p>Personalized sessions tailored to your story.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <div className="text-[var(--accent)] font-bold text-2xl">✔</div>
              <p>High-quality, cinematic style photography.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <div className="text-[var(--accent)] font-bold text-2xl">✔</div>
              <p>Passionate team with years of experience.</p>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full h-[400px] rounded-2xl overflow-hidden shadow-xl"
        >
          <img
            src="/homehero2.jpg"
            alt="Why Choose Photography"
            className="w-full h-full object-contain object-center"
          />
        </motion.div>

      </div>

      {/* Testimonial Capsule */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-[var(--accent)] text-[var(--background)] p-4 rounded-lg shadow-lg max-w-md text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.5 }}
        viewport={{ once: true }}
      >
        “Photography is the story I fail to put into words.”
      </motion.div>

    </section>
  )
}
