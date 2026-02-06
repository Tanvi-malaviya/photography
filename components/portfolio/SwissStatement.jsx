"use client";

import { motion } from "framer-motion";

export function CinematicStatement() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">

      {/* Background Accent Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[12rem] md:text-[16rem] font-bold text-black/5 tracking-widest">
          STORY
        </span>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold leading-tight mb-16"
        >
          <motion.span
            initial={{ y: 80, opacity: 0, filter: "blur(6px)" }}
            whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="block"
          >
            Emotion
          </motion.span>

          <motion.span
            initial={{ y: 80, opacity: 0, filter: "blur(6px)" }}
            whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: true }}
            className="block"
          >
            Meets
          </motion.span>

          <motion.span
            initial={{ y: 80, opacity: 0, filter: "blur(6px)" }}
            whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="block"
          >
            Precision
          </motion.span>
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "120px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-[2px] bg-black mb-12"
        />

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-gray-600 text-lg leading-relaxed"
        >
          Photography, for us, is not just about what you see — it’s about what
          you feel. Every frame is crafted with intention, balancing raw human
          emotion with refined composition, light, and timing to create imagery
          that remains timeless.
        </motion.p>

      </div>
    </section>
  );
}
