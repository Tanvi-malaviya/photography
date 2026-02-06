'use client'

import { motion } from 'framer-motion'

const process = [
  {
    step: '01',
    title: 'Discover the Vision',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
  },
  {
    step: '02',
    title: 'Design the Experience',
    desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
  },
  {
    step: '03',
    title: 'Capture with Intention',
    desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
  },
  {
    step: '04',
    title: 'Craft the Final Story',
    desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
  },
]

export default function AboutProcessUnique() {
  return (
    <section className="relative bg-neutral-50 py-20 sm:py-28 lg:py-32 overflow-hidden">

      {/* Soft background curve */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-neutral-100 -z-10" />

      <div className="max-w-6xl mx-auto px-6">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-xs sm:text-sm tracking-widest uppercase text-[var(--accent)]">
            Our Process
          </span>

          <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl lg:text-6xl font-serif text-neutral-900">
            How every story comes to life
          </h2>
        </motion.div>

        {/* Process Cards */}
        <div className="flex flex-col gap-10 sm:gap-14">

          {process.map((item, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 60,
                rotate: i % 2 === 0 ? -2 : 2,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: 0,
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className={`
                relative
                w-full
                max-w-xl
                mx-auto
                lg:mx-0
                ${i % 2 === 0 ? 'lg:self-start' : 'lg:self-end'}
              `}
            >
              {/* Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-neutral-200 shadow-[0_30px_60px_rgba(0,0,0,0.08)]">

                {/* Step number */}
                <span className="block text-xs sm:text-sm tracking-widest text-[var(--accent)] mb-3 sm:mb-4">
                  STEP {item.step}
                </span>

                <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900">
                  {item.title}
                </h3>

                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Floating accent dot (desktop only) */}
              <motion.span
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-4 h-4 rounded-full bg-[var(--accent)]/40 hidden sm:block"
              />
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}
