"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Every frame felt like a masterpiece. The emotions were captured so naturally.",
    name: "Rhea Sharma",
    role: "Jaipur Wedding",
  },
  {
    quote:
      "The storytelling, the light, the elegance — beyond our expectations.",
    name: "Aarav Mehta",
    role: "Pre-Wedding Shoot",
  },
  {
    quote:
      "Truly timeless photography. We relive the day every time we see the images.",
    name: "Meera Kapoor",
    role: "Luxury Event",
  },
];

function SplitQuote({ text }) {
  const words = text.split(" ");

  return (
    <p className="text-2xl md:text-3xl font-medium leading-relaxed text-black">
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          viewport={{ once: true }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
}

export default function ClientExperience() {
  return (
    <section className="relative py-40 bg-white overflow-hidden">

      {/* Soft Glow Background */}
      <div className="absolute -top-40 right-1/2 translate-x-1/2 w-[900px] h-[900px] bg-gray-100 rounded-full blur-3xl opacity-60" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold">
            Client Experience
          </h2>
          <p className="text-gray-600 mt-6 max-w-xl mx-auto">
            Stories told through the eyes of those who trusted us.
          </p>
        </motion.div>

        {/* Horizontal Scroll Container */}
        <div className="flex gap-10 overflow-x-auto no-scrollbar pb-4">

          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="min-w-[340px] md:min-w-[420px] p-10 rounded-3xl backdrop-blur-xl bg-white/70 shadow-xl border border-gray-200"
            >
              <SplitQuote text={`“${item.quote}”`} />

              <div className="mt-10">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500 mt-1">
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
