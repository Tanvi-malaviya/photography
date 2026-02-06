"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "150+",
    label:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    number: "8+",
    label:
      "Sed do eiusmod tempor incididunt ut labore et dolore."
  },
  {
    number: "2,500+",
    label:
      "Ut enim ad minim veniam, quis nostrud exercitation."
  },
  {
    number: "100%",
    label:
      "Duis aute irure dolor in reprehenderit voluptate."
  },
];

export function PortfolioStats() {
  return (
    <section className="py-14 sm:py-16 md:py-24 bg-white">
      <div
        className="
          max-w-6xl mx-auto
          px-4 sm:px-6
          grid grid-cols-2 md:grid-cols-4
          gap-y-12 gap-x-6 md:gap-16
          text-center
        "
      >
        {stats.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              {item.number}
            </h3>

            <p
              className="
                text-gray-600
                mt-3 sm:mt-4
                text-sm sm:text-base
                leading-relaxed
                max-w-xs mx-auto
              "
            >
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
