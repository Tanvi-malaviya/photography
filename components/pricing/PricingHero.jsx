"use client";

import { motion } from "framer-motion";

export function PricingHero() {
  return (
    <section className="relative pt-30 pb-10 bg-white px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">

        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6 px-5 py-2 rounded-full bg-black/5 text-sm tracking-wide"
        >
          PRICING & PACKAGES
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-semibold leading-tight"
        >
          Every story is different. <br />
          <span className="text-black/60">
            So is the pricing.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-lg text-black/60 max-w-2xl mx-auto"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </motion.p>
      </div>
    </section>
  );
}
