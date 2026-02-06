"use client";

import { motion } from "framer-motion";

export default function KineticEditorialCTA() {
  return (
    <section className="relative bg-white overflow-hidden py-20">

      {/* FLOATING WORDS */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        {["STORIES", "MOMENTS", "MEMORY", "TIME"].map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{
              opacity: 0.06,
              y: [0, -30, 0],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute text-[18vw] font-bold text-black select-none
            "
            style={{
              transform: `translate(${i * 6 - 10}vw, ${i * 4 - 8}vh)`,
            }}
          >
            {word}
          </motion.span>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* SMALL INTRO */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[0.45em] text-xs text-gray-400 mb-7 "
        >
          Final Frame
        </motion.p>

        {/* MAIN STATEMENT */}
        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="
            text-6xl md:text-6xl font-bold leading-[1.05]
            max-w-5xl
          "
        >
          Not just photographs —
          <br />
          <span className="block mt-4">
            but proof that it all
            <span className="italic font-serif"> mattered</span>.
          </span>
        </motion.h2>

        {/* SUB COPY */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="
            mt-10 text-lg text-gray-600 max-w-xl leading-relaxed
          "
        >
          When the day has passed and the noise has faded,
          what remains are images that carry emotion —
          quietly, honestly, forever.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12"
        >
          <motion.a
            href="/contact"
            whileHover="hover"
            className="
              group inline-flex items-center gap-6
              text-sm uppercase tracking-widest text-black
              relative
            "
          >
            <span className="relative z-10">
              Begin Your Story
            </span>

            {/* Magnetic Line */}
            <motion.span
              variants={{
                hover: { width: 80 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="block h-[1px] w-12 bg-black"
            />

            {/* Subtle Circle */}
            <motion.span
              variants={{
                hover: { scale: 1.6, opacity: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="
                absolute -left-6 top-1/2
                w-10 h-10 rounded-full border border-black/30
                -translate-y-1/2
              "
            />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
