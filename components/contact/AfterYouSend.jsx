"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "You’ll Hear Back Soon",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    title: "A Thoughtful Conversation",
    desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    title: "Only If It Feels Right",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  }
];

export default function AfterYouSendAlt() {
  return (
    <section className="relative bg-[#fafafa] py-20 sm:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* TITLE */}
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black text-center mb-16 sm:mb-20 lg:mb-24"
        >
          What happens after you send
        </motion.h3>

        {/* FLOATING BLOCKS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 lg:gap-16">

          {steps.map((item, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 60,
                filter: "blur(6px)"
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)"
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: i * 0.2,
                ease: "easeOut"
              }}
              className="relative bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12 text-center shadow-[0_30px_60px_rgba(0,0,0,0.06)]"
            >
              {/* SOFT NUMBER */}
              <span className="absolute -top-5 -right-4 sm:-top-6 sm:-right-6 text-6xl sm:text-7xl font-bold text-black/5">
                0{i + 1}
              </span>

              <h4 className="text-xl sm:text-2xl font-semibold text-black mb-3 sm:mb-4">
                {item.title}
              </h4>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                {item.desc}
              </p>

              {/* SOFT UNDERLINE */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="origin-center h-[1px] w-14 sm:w-16 bg-black/40 mx-auto mt-8 sm:mt-10"
              />
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}