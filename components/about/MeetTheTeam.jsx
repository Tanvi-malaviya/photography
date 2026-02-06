'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const team = [
  {
    name: 'Aarav Patel',
    role: 'Lead Photographer',
    image: '/homehero.jpg',
  },
  {
    name: 'Meera Shah',
    role: 'Cinematographer',
    image: '/homehero.jpg',
  },
  {
    name: 'Rohan Desai',
    role: 'Creative Director',
    image: '/homehero.jpg',
  },
]

export default function MeetTheTeam() {
  return (
    <section className="relative bg-white py-16 sm:py-20 overflow-hidden">

      {/* Soft background glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[420px] sm:w-[600px] h-[420px] sm:h-[600px] bg-gray-100 rounded-full blur-3xl opacity-50" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-14 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Meet The Minds
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-600 max-w-xl text-sm sm:text-base">
            The creative force shaping timeless visual stories.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="relative flex flex-col gap-16 sm:gap-20">

          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className={`
                relative
                flex
                flex-col
                md:flex-row
                items-center
                gap-10
                md:gap-12
                ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}
              `}
            >

              {/* Image */}
              <motion.div
                whileHover={{ rotate: 0 }}
                style={{ rotate: i % 2 === 0 ? -2 : 2 }}
                className="
                  relative
                  w-full
                  max-w-[320px]
                  sm:max-w-[380px]
                  h-[360px]
                  sm:h-[420px]
                  rounded-3xl
                  overflow-hidden
                  shadow-xl
                  group
                "
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition duration-700"
                />

                {/* Role Badge */}
                <div className="absolute bottom-4 left-4 backdrop-blur-xl bg-white/70 px-4 py-2 rounded-full text-xs shadow-md">
                  {member.role}
                </div>
              </motion.div>

              {/* Text */}
              <div className="max-w-sm text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl font-semibold mb-2 sm:mb-3">
                  {member.name}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}
