'use client'

import { motion } from 'framer-motion'

const styles = [
  {
    title: 'Candid',
    desc: 'Unposed, honest moments captured as they happen.',
    image: '/homehero.jpg',
    number: '01',
  },
  {
    title: 'Cinematic',
    desc: 'Dramatic lighting and frames inspired by cinema.',
    image: '/homehero.jpg',
    number: '02',
  },
  {
    title: 'Storytelling',
    desc: 'Every photograph connects into a meaningful story.',
    image: '/homehero.jpg',
    number: '03',
  },
]

export default function OurStyle() {
  return (
    <section className="bg-black text-white py-32">
      
      {/* Heading */}
      <div className="max-w-6xl mx-auto px-6 mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-semibold"
        >
          Our Style
        </motion.h2>
        <p className="mt-6 text-white/70 max-w-xl">
          A signature approach that blends emotion, aesthetics, and story.
        </p>
      </div>

      {/* Panels */}
      <div className="max-w-7xl mx-auto space-y-10 px-6">
        {styles.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="group relative h-[320px] rounded-3xl overflow-hidden border border-white/10"
          >
            {/* Image Reveal */}
            <motion.div
              className="absolute inset-0"
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              whileHover={{ clipPath: 'inset(0 0% 0 0)' }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center px-10">
              <div className="flex items-start gap-8">
                <span className="text-white/30 text-3xl font-light">
                  {item.number}
                </span>

                <div>
                  <h3 className="text-4xl md:text-5xl font-semibold">
                    {item.title}
                  </h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-4 text-white/80 max-w-md"
                  >
                    {item.desc}
                  </motion.p>
                </div>
              </div>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  )
}
