'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    step: '01',
    title: 'Understand Your Story',
    desc: 'We start by understanding your emotions, vision and purpose.',
  },
  {
    step: '02',
    title: 'Plan the Experience',
    desc: 'Every detail is planned so moments flow naturally.',
  },
  {
    step: '03',
    title: 'Capture the Magic',
    desc: 'We focus on light, timing and composition.',
  },
  {
    step: '04',
    title: 'Deliver with Perfection',
    desc: 'Carefully edited and delivered with cinematic quality.',
  },
]

export default function OurApproach() {
  return (
    <section className="relative bg-[var(--background)] py-16">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">

        {/* LEFT – Sticky visual */}
        <div className="relative p-4">
          <div className="sticky top-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-[var(--foreground)] text-[var(--background)] p-16"
            >
              <p className="text-sm tracking-widest opacity-70">
                OUR APPROACH
              </p>

              <h2 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
                How We<br />Create Stories
              </h2>

              <p className="mt-6 opacity-80">
                From first conversation to final delivery — every step is
                designed to feel effortless and personal.
              </p>
            </motion.div>
          </div>
        </div>

        {/* RIGHT – Steps */}
        <div className="space-y-24">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex gap-8 items-start">

                {/* Step number */}
                <div className="text-7xl font-bold text-[var(--foreground)] opacity-10 group-hover:opacity-30 transition">
                  {item.step}
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-[var(--foreground)]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[var(--text-secondary)] max-w-md">
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
