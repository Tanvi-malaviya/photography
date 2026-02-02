'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import CommonModal from '../CommonModel'

const services = [
  { title: 'Wedding Photography', subtitle: 'Moments that last forever', number: '01' },
  { title: 'Portrait Sessions', subtitle: 'Stories in every frame', number: '02' },
  { title: 'Event Coverage', subtitle: 'Every detail captured', number: '03' },
]

export default function ServicesSection() {
  const [open, setOpen] = useState(false)

  return (
    <section className="relative bg-[var(--background)] py-10 overflow-hidden">

      {/* Background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-[18vw] font-bold text-[var(--foreground)] opacity-[0.04]">
          SERVICES
        </h1>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <p className="text-sm tracking-widest text-[var(--text-secondary)]">
            WHAT WE DO
          </p>
          <h2 className="mt-4 text-5xl md:text-7xl font-bold text-[var(--foreground)]">
            Crafted Visual<br />Experiences
          </h2>
        </motion.div>

        {/* Services */}
        <div className="space-y-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ x: index % 2 === 0 ? -120 : 120, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex items-center gap-10">
                <div className="text-7xl font-bold opacity-20 group-hover:opacity-100">
                  {service.number}
                </div>
                <div className="flex-1 h-px bg-[var(--foreground)] opacity-20" />
                <div className="max-w-xl">
                  <h3 className="text-3xl md:text-4xl font-semibold">
                    {service.title}
                  </h3>
                  <p className="mt-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition">
                    {service.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-4 text-lg font-semibold group"
          >
            <span>Book Your Session</span>
            <span className="w-10 h-px bg-[var(--foreground)] group-hover:w-20 transition-all duration-500" />
          </button>
        </motion.div>
      </div>

      {/* Popup */}
      <CommonModal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Book Your Session"
      >
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-xl border px-4 py-3 bg-transparent"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-xl border px-4 py-3 bg-transparent"
          />
          <textarea
            placeholder="Tell us about your event"
            className="w-full rounded-xl border px-4 py-3 bg-transparent"
            rows={4}
          />
          <button className="w-full mt-4 rounded-xl bg-[var(--foreground)] text-[var(--background)] py-3 font-semibold">
            Submit Request
          </button>
        </form>
      </CommonModal>

    </section>
  )
}
