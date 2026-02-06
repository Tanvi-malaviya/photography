"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Discovery",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    title: "Planning",
    desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    title: "Capture",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    title: "Refinement",
    desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
];

export function BehindProcess() {
  return (
    <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            text-3xl sm:text-4xl md:text-5xl
            font-bold text-center
            mb-10 sm:mb-14 md:mb-16
          "
        >
          Behind The Process
        </motion.h2>

        {/* Timeline */}
        <div className="
          relative
          border-l border-gray-300
          ml-4 sm:ml-6
          space-y-8 sm:space-y-10
        ">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-8 sm:pl-12"
            >
              {/* Dot */}
              <div className="
                absolute
                -left-[7px] sm:-left-[9px]
                top-2
                w-3 h-3 sm:w-4 sm:h-4
                bg-black rounded-full
              " />

              {/* Content */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                {step.title}
              </h3>

              <p className="
                text-gray-600
                mt-2 sm:mt-3
                text-sm sm:text-base
                leading-relaxed
                max-w-xl
              ">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
