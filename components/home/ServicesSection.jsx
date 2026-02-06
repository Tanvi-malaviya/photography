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
    <section className="relative bg-[var(--background)] py-20 md:py-32 overflow-hidden">

      {/* Background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-[32vw] sm:text-[24vw] lg:text-[18vw] font-bold text-[var(--foreground)] opacity-[0.04]">
          SERVICES
        </h1>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <p className="text-xs sm:text-sm tracking-widest text-[var(--text-secondary)]">
            WHAT WE DO
          </p>

          <h2 className="mt-4 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--foreground)] leading-tight">
            Crafted Visual<br />Experiences
          </h2>
        </motion.div>

        {/* Services List */}
        <div className="space-y-10 md:space-y-14">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{
                x: index % 2 === 0 ? -100 : 100,
                opacity: 0,
              }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">

                {/* Number */}
                <div className="text-5xl sm:text-6xl md:text-7xl font-bold opacity-30 group-hover:opacity-100 transition">
                  {service.number}
                </div>

                {/* Line */}
                <div className="hidden md:block flex-1 h-px bg-[var(--foreground)] opacity-20" />

                {/* Content */}
                <div className="max-w-xl">
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base md:text-lg opacity-70 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition">
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
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-7 md:mt-10"
        >
          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-4 text-base sm:text-lg font-semibold group"
          >
            <span>Book Your Session</span>
            <span className="w-10 group-hover:w-20 h-px bg-[var(--foreground)] transition-all duration-500" />
          </button>
        </motion.div>
      </div>

      {/* Modal */}
      <CommonModal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Book Your Session"
      >
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-xl border px-4 py-3 bg-transparent outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-xl border px-4 py-3 bg-transparent outline-none"
          />
          <textarea
            placeholder="Tell us about your event"
            className="w-full rounded-xl border px-4 py-3 bg-transparent outline-none"
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
