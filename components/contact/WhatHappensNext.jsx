"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "We Receive Your Story",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    number: "02",
    title: "A Personal Conversation",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    number: "03",
    title: "A Thoughtful Proposal",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    number: "04",
    title: "The Journey Begins",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
];

export default function WhatHappensNextMinimal() {
  return (
    <section className="bg-white py-5">

      <div className="max-w-5xl mx-auto px-6">

        {/* INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-18"
        >
          <p className="uppercase tracking-[0.4em] text-xs text-gray-400">
            What Happens Next
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-black leading-tight">
            A calm, intentional  way forward
          </h2>

          <p className="mt-8 text-gray-600 max-w-xl mx-auto text-lg">
            From your first message to the final delivery —
            everything unfolds with clarity and care.
          </p>
        </motion.div>

        {/* STEPS */}
        <div className="space-y-18">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.1 }}
              className="max-w-3xl mx-auto text-center"
            >
              {/* NUMBER */}
              <span className="block text-6xl font-bold text-black/10 mb-6">
                {step.number}
              </span>

              {/* TITLE */}
              <h3 className="text-3xl md:text-4xl font-semibold text-black mb-6">
                {step.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-600 text-lg leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
