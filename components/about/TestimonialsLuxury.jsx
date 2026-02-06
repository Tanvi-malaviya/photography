"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Dolor Sit",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Amet Consectetur",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

export function TestimonialsLuxury() {
  return (
    <section className="relative py-20 sm:py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">

      {/* Big Quote Background */}
      <div className="absolute text-[120px] sm:text-[160px] md:text-[200px] font-bold text-black/5 top-16 sm:top-20 left-1/2 -translate-x-1/2 select-none">
        "
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-6 relative">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6">
            Lorem Ipsum Dolor
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 sm:gap-10 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative backdrop-blur-xl bg-white/70 border border-white/40 shadow-xl rounded-3xl p-6 sm:p-8 md:p-10"
            >
              <p className="text-gray-700 leading-relaxed mb-5 text-sm sm:text-base">
                {item.text}
              </p>
              <h4 className="font-semibold text-black text-sm sm:text-base">
                — {item.name}
              </h4>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
