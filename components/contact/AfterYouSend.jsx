"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "You’ll Hear Back Soon",
    desc: "A personal response within 24–48 hours."
  },
  {
    title: "A Thoughtful Conversation",
    desc: "We connect calmly, without rushing or pressure."
  },
  {
    title: "Only If It Feels Right",
    desc: "No expectations — just an honest exchange."
  }
];

export default function AfterYouSendAlt() {
  return (
    <section className="relative bg-[#fafafa] py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-semibold text-black text-center mb-24"
        >
          What happens after you send
        </motion.h3>

        {/* FLOATING BLOCKS */}
        <div className="grid md:grid-cols-3 gap-16">

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
              className="relative bg-white rounded-3xl p-12 text-center shadow-[0_30px_60px_rgba(0,0,0,0.06)]"
            >
              {/* SOFT NUMBER */}
              <span className="absolute -top-6 -right-6 text-7xl font-bold text-black/5">
                0{i + 1}
              </span>

              <h4 className="text-2xl font-semibold text-black mb-4">
                {item.title}
              </h4>

              <p className="text-gray-600 text-lg leading-relaxed">
                {item.desc}
              </p>

              {/* SOFT UNDERLINE */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="origin-center h-[1px] w-16 bg-black/40 mx-auto mt-10"
              />
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
