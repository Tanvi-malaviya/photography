"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Discovery & Planning",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    number: "02",
    title: "The Shoot Experience",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    number: "03",
    title: "Cinematic Editing",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    number: "04",
    title: "Final Delivery",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default function BehindTheLens() {
  return (
    <section className="relative bg-white py-20 md:py-32 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white -z-10" />

      <div className="max-w-6xl mx-auto px-5 md:px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            Behind The Lens
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </motion.div>

        {/* Layout */}
        <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-start">

          {/* Image */}
          <div className="md:sticky md:top-28">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-xl"
            >
              <Image
                src="/behindlens.jpg"
                alt="Behind the Lens"
                width={600}
                height={750}
                className="object-cover w-full h-[300px] sm:h-[420px] md:h-[600px]"
              />
            </motion.div>
          </div>

          {/* Steps */}
          <div className="relative space-y-16 md:space-y-24">

            {/* Vertical line (desktop only) */}
            <div className="hidden md:block absolute left-5 top-0 w-[2px] h-full bg-gray-200" />

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative md:pl-16"
              >
                {/* Number */}
                <div className="flex md:absolute md:left-0 md:top-1 items-center justify-center w-10 h-10 rounded-full bg-black text-white text-sm font-semibold shadow-md mb-4 md:mb-0">
                  {step.number}
                </div>

                <h4 className="text-lg sm:text-xl font-semibold text-black mb-2">
                  {step.title}
                </h4>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
