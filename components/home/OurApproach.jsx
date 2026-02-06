'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    step: '01',
    title: 'Understand Your Story',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    step: '02',
    title: 'Plan the Experience',
    desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    step: '03',
    title: 'Capture the Magic',
    desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    step: '04',
    title: 'Deliver with Perfection',
    desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
]

export default function OurApproach() {
  return (
    <section className="relative bg-[var(--background)] py-16 sm:py-20 md:py-28">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">

        {/* LEFT – Sticky visual */}
        <div className="relative">
          <div className="lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-2xl sm:rounded-3xl bg-[var(--foreground)] text-[var(--background)] p-8 sm:p-12 md:p-16"
            >
              <p className="text-xs sm:text-sm tracking-widest opacity-70">
                OUR APPROACH
              </p>

              <h2 className="mt-5 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                How We<br />Create Stories
              </h2>

              <p className="mt-4 sm:mt-6 text-sm sm:text-base opacity-80 max-w-md">
                From first conversation to final delivery — every step is
                designed to feel effortless and personal.
              </p>
            </motion.div>
          </div>
        </div>

        {/* RIGHT – Steps */}
        <div className="space-y-16 sm:space-y-20 md:space-y-24">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex gap-6 sm:gap-8 items-start">

                {/* Step number */}
                <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-[var(--foreground)] opacity-15 sm:opacity-10 group-hover:opacity-30 transition">
                  {item.step}
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[var(--foreground)]">
                    {item.title}
                  </h3>

                  <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[var(--text-secondary)] max-w-md">
                    {item.desc}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
