"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FaqHero() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-[color:var(--color-surface)] px-6">

  

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-4xl text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-black/5 text-sm tracking-wide"
        >
          📸 FAQ
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight"
        >
          Questions Before <br />
          <span className="text-black/60">Your Photoshoot?</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-lg text-black/60 max-w-2xl mx-auto"
        >
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex justify-center gap-4"
        >
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-black text-white text-sm tracking-wide hover:scale-105 transition"
          >
            Ask a Question
          </Link>

          <Link
            href="#faq"
            className="px-8 py-4 rounded-full border border-black/20 text-sm tracking-wide hover:bg-black/5 transition"
          >
            Browse FAQs
          </Link>
        </motion.div>
      </motion.div>

    </section>
  );
}
